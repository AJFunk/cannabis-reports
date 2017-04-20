// @flow
const url = require('url');
const assert = require('assert');
const http = require('http');
const https = require('https');
const Writable: Function = require('stream').Writable;

const nativeProtocols = {
  'http:': http,
  'https:': https,
};
const schemes = {};
const safeMethods = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
  TRACE: true,
};

const eventHandlers = Object.create(null);

['abort', 'aborted', 'error', 'socket'].forEach((event: string): void => {
  eventHandlers[event] = function a(arg: Object): void {
    this._redirectable.emit(event, arg);
  };
});

function RedirectableRequest(options: Object, responseCallback: Object): void {
  Writable.call(this);
  this._options = options;
  this._redirectCount = 0;
  this._bufferedWrites = [];
  if (responseCallback) this.on('response', responseCallback);
  this._onNativeResponse = (response: Object): Object => this._processResponse(response);
  this._performRequest();
}

RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype._performRequest = function b(): void {
  const protocol = this._options.protocol;
  if (this._options.agents) this._options.agent = this._options.agents[schemes[protocol]];

  const nativeProtocol = nativeProtocols[protocol];
  const request = this._currentRequest =
    nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  request._redirectable = this;
  for (const event in eventHandlers) {
    if (event) request.on(event, eventHandlers[event]);
  }

  if (this._isRedirect) {
    const bufferedWrites = this._bufferedWrites;
    if (bufferedWrites.length === 0) {
      request.end();
    } else {
      let i = 0;
      const writeNext = (): void => {
        if (i < bufferedWrites.length) {
          const bufferedWrite = bufferedWrites[i++];
          request.write(bufferedWrite.data, bufferedWrite.encoding, writeNext);
        } else {
          request.end();
        }
      };
      writeNext();
    }
  }
};

RedirectableRequest.prototype._processResponse = function c(response: Object): null {
  const location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    if (++this._redirectCount > this._options.maxRedirects) {
      return this.emit('error', new Error('Max redirects exceeded.'));
    }

    const headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in safeMethods)) {
      this._options.method = 'GET';
      this._bufferedWrites = [];
      for (const header in headers) {
        if (/^content-/i.test(header)) delete headers[header];
      }
    }

    if (!this._isRedirect) {
      for (const header in headers) {
        if (/^host$/i.test(header)) delete headers[header];
      }
    }

    const redirectUrl = url.resolve(this._currentUrl, location);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();
  } else {
    this.emit('response', Object.assign(response, { responseUrl: this._currentUrl }));
    delete this._options;
    delete this._bufferedWrites;
  }
  return null;
};

RedirectableRequest.prototype.abort = function d(): void {
  this._currentRequest.abort();
};

RedirectableRequest.prototype.flushHeaders = function e(): void {
  this._currentRequest.flushHeaders();
};

RedirectableRequest.prototype.setNoDelay = function f(noDelay: boolean): void {
  this._currentRequest.setNoDelay(noDelay);
};

RedirectableRequest.prototype.setSocketKeepAlive =
function g(enable: boolean, initialDelay: number): void {
  this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

RedirectableRequest.prototype.setTimeout =
function h(timeout: number, cb: () => void): void {
  this._currentRequest.setTimeout(timeout, cb);
};

RedirectableRequest.prototype._write =
function i(data: Object, encoding: string, cb: () => void): void {
  this._currentRequest.write(data, encoding, cb);
  this._bufferedWrites.push({ data, encoding });
};

RedirectableRequest.prototype.end =
function j(data: Object, encoding: string, cb: () => void): void {
  this._currentRequest.end(data, encoding, cb);
  if (data) this._bufferedWrites.push({ data, encoding });
};

Object.keys(nativeProtocols).forEach((protocol: string): void => {
  const scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
  const nativeProtocol = nativeProtocols[protocol];
  const wrappedProtocol = module.exports[scheme] = Object.create(nativeProtocol);

  wrappedProtocol.request = function k(options: Object | string, cb: () => void): Object {
    let newOptions;
    if (typeof options === 'string') {
      newOptions = Object.assign(
        {},
        url.parse(options),
        { maxRedirects: 21 }
      );
    } else {
      newOptions = Object.assign({
        maxRedirects: 21,
        protocol,
      }, options);
    }
    assert.equal(newOptions.protocol, protocol, 'protocol mismatch');
    return new RedirectableRequest(newOptions, cb);
  };

  wrappedProtocol.get = function l(options: Object, cb: () => void): Object {
    const request = wrappedProtocol.request(options, cb);
    request.end();
    return request;
  };
});
