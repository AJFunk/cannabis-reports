'use strict';
const url = require('url');
const assert = require('assert');
const http = require('http');
const https = require('https');
const Writable = require('stream').Writable;

const nativeProtocols = {
  'http:': http,
  'https:': https,
};
const schemes = {};
const exports = module.exports = {
  maxRedirects: 21,
};

const safeMethods = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
  TRACE: true,
};

const eventHandlers = Object.create(null);

['abort', 'aborted', 'error', 'socket'].forEach((event: object): undefined => {
  eventHandlers[event] = function a(arg: object): undefined {
    this._redirectable.emit(event, arg);
  };
});

function RedirectableRequest(options: object, responseCallback: object): undefined {
  Writable.call(this);
  this._options = options;
  this._redirectCount = 0;
  this._bufferedWrites = [];
  if (responseCallback) this.on('response', responseCallback);
  this._onNativeResponse = (response: object): object => this._processResponse(response);
  this._performRequest();
}

RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype._performRequest = function b(): undefined {
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
      const writeNext = (): undefined => {
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

RedirectableRequest.prototype._processResponse = function c(response: object): null {
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

RedirectableRequest.prototype.abort = function d(): undefined {
  this._currentRequest.abort();
};

RedirectableRequest.prototype.flushHeaders = function e(): undefined {
  this._currentRequest.flushHeaders();
};

RedirectableRequest.prototype.setNoDelay = function f(noDelay: boolean): undefined {
  this._currentRequest.setNoDelay(noDelay);
};

RedirectableRequest.prototype.setSocketKeepAlive =
function g(enable: boolean, initialDelay: number): undefined {
  this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

RedirectableRequest.prototype.setTimeout =
function h(timeout: number, callback: object): undefined {
  this._currentRequest.setTimeout(timeout, callback);
};

RedirectableRequest.prototype._write =
function i(data: object, encoding: string, callback: object): undefined {
  this._currentRequest.write(data, encoding, callback);
  this._bufferedWrites.push({ data, encoding });
};

RedirectableRequest.prototype.end =
function j(data: object, encoding: string, callback: object): undefined {
  this._currentRequest.end(data, encoding, callback);
  if (data) this._bufferedWrites.push({ data, encoding });
};

Object.keys(nativeProtocols).forEach((protocol: string): undefined => {
  const scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
  const nativeProtocol = nativeProtocols[protocol];
  const wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

  wrappedProtocol.request = function k(options: object, callback: object): object {
    let newOptions;
    if (typeof options === 'string') {
      newOptions = url.parse(options);
      newOptions.maxRedirects = exports.maxRedirects;
    } else {
      newOptions = Object.assign({
        maxRedirects: exports.maxRedirects,
        protocol,
      }, options);
    }
    assert.equal(newOptions.protocol, protocol, 'protocol mismatch');
    return new RedirectableRequest(newOptions, callback);
  };

  wrappedProtocol.get = function l(options: object, callback: object): object {
    const request = wrappedProtocol.request(options, callback);
    request.end();
    return request;
  };
});
