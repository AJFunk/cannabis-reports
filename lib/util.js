'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUcpc = exports.sendRequest = exports.handleResult = undefined;

var _redirects = require('./redirects');

var _config = require('./config');

// $FlowFixMe
var handleResult = function handleResult(resolve, reject, err, data) {
  if (err) return reject(err);
  return data ? resolve(data) : reject(new Error('No data found'));
};

var sendRequest = function sendRequest(endpoint) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var resolve = arguments[2];
  var reject = arguments[3];
  var cb = arguments[4];

  var url = endpoint + '?';
  if (options) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        url = '' + url + key + '=' + options[key] + '&';
      }
    }
  }
  url = url.replace(/\s/g, '%20');
  if (url[url.length - 1] === '&' || url[url.length - 1] === '?') {
    url = url.substr(0, url.length - 1);
  }

  var params = {
    host: 'www.cannabisreports.com',
    path: '/api/v1.0/' + url,
    method: 'GET',
    headers: {
      'X-API-Key': _config.apiKey
    }
  };

  var req = _redirects.https.request(params, function (res) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb(resolve, reject, new Error('statusCode=' + res.statusCode));
    }
    var buf = [];
    res.on('data', function (c) {
      return buf.push(c);
    });
    res.on('end', function () {
      var d = JSON.parse(Buffer.concat(buf).toString());
      return cb(resolve, reject, null, d.data);
    });
    return null;
  });
  req.on('error', function (err) {
    return cb(resolve, reject, err);
  });
  req.end();
};

var validateUcpc = function validateUcpc(ucpc) {
  if (!ucpc || ucpc.length !== 25) return false;
  if (typeof ucpc !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
  return true;
};

exports.handleResult = handleResult;
exports.sendRequest = sendRequest;
exports.validateUcpc = validateUcpc;