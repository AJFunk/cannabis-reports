'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = require('url');
var assert = require('assert');
var http = require('http');
var https = require('https');
var Writable = require('stream').Writable;

var nativeProtocols = {
  'http:': http,
  'https:': https
};
var schemes = {};
var _exports = module.exports = {
  maxRedirects: 21
};

var safeMethods = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
  TRACE: true
};

var eventHandlers = (0, _create2.default)(null);

['abort', 'aborted', 'error', 'socket'].forEach(function (event) {
  eventHandlers[event] = function a(arg) {
    this._redirectable.emit(event, arg);
  };
});

function RedirectableRequest(options, responseCallback) {
  var _this = this;

  Writable.call(this);
  this._options = options;
  this._redirectCount = 0;
  this._bufferedWrites = [];
  if (responseCallback) this.on('response', responseCallback);
  this._onNativeResponse = function (response) {
    return _this._processResponse(response);
  };
  this._performRequest();
}

RedirectableRequest.prototype = (0, _create2.default)(Writable.prototype);

RedirectableRequest.prototype._performRequest = function b() {
  var _this2 = this;

  var protocol = this._options.protocol;
  if (this._options.agents) this._options.agent = this._options.agents[schemes[protocol]];

  var nativeProtocol = nativeProtocols[protocol];
  var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  request._redirectable = this;
  for (var event in eventHandlers) {
    if (event) request.on(event, eventHandlers[event]);
  }

  if (this._isRedirect) {
    (function () {
      var bufferedWrites = _this2._bufferedWrites;
      if (bufferedWrites.length === 0) {
        request.end();
      } else {
        (function () {
          var i = 0;
          var writeNext = function writeNext() {
            if (i < bufferedWrites.length) {
              var bufferedWrite = bufferedWrites[i++];
              request.write(bufferedWrite.data, bufferedWrite.encoding, writeNext);
            } else {
              request.end();
            }
          };
          writeNext();
        })();
      }
    })();
  }
};

RedirectableRequest.prototype._processResponse = function c(response) {
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false && response.statusCode >= 300 && response.statusCode < 400) {
    if (++this._redirectCount > this._options.maxRedirects) {
      return this.emit('error', new Error('Max redirects exceeded.'));
    }

    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in safeMethods)) {
      this._options.method = 'GET';
      this._bufferedWrites = [];
      for (var header in headers) {
        if (/^content-/i.test(header)) delete headers[header];
      }
    }

    if (!this._isRedirect) {
      for (var _header in headers) {
        if (/^host$/i.test(_header)) delete headers[_header];
      }
    }

    var redirectUrl = url.resolve(this._currentUrl, location);
    (0, _assign2.default)(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();
  } else {
    this.emit('response', (0, _assign2.default)(response, { responseUrl: this._currentUrl }));
    delete this._options;
    delete this._bufferedWrites;
  }
  return null;
};

RedirectableRequest.prototype.abort = function d() {
  this._currentRequest.abort();
};

RedirectableRequest.prototype.flushHeaders = function e() {
  this._currentRequest.flushHeaders();
};

RedirectableRequest.prototype.setNoDelay = function f(noDelay) {
  this._currentRequest.setNoDelay(noDelay);
};

RedirectableRequest.prototype.setSocketKeepAlive = function g(enable, initialDelay) {
  this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

RedirectableRequest.prototype.setTimeout = function h(timeout, callback) {
  this._currentRequest.setTimeout(timeout, callback);
};

RedirectableRequest.prototype._write = function i(data, encoding, callback) {
  this._currentRequest.write(data, encoding, callback);
  this._bufferedWrites.push({ data: data, encoding: encoding });
};

RedirectableRequest.prototype.end = function j(data, encoding, callback) {
  this._currentRequest.end(data, encoding, callback);
  if (data) this._bufferedWrites.push({ data: data, encoding: encoding });
};

(0, _keys2.default)(nativeProtocols).forEach(function (protocol) {
  var scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
  var nativeProtocol = nativeProtocols[protocol];
  var wrappedProtocol = _exports[scheme] = (0, _create2.default)(nativeProtocol);

  wrappedProtocol.request = function k(options, callback) {
    var newOptions = void 0;
    if (typeof options === 'string') {
      newOptions = url.parse(options);
      newOptions.maxRedirects = _exports.maxRedirects;
    } else {
      newOptions = (0, _assign2.default)({
        maxRedirects: _exports.maxRedirects,
        protocol: protocol
      }, options);
    }
    assert.equal(newOptions.protocol, protocol, 'protocol mismatch');
    return new RedirectableRequest(newOptions, callback);
  };

  wrappedProtocol.get = function l(options, callback) {
    var request = wrappedProtocol.request(options, callback);
    request.end();
    return request;
  };
});