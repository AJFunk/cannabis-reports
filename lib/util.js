'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUcpc = exports.sendRequest = undefined;

var _redirects = require('./redirects');

var _config = require('./config');

// $FlowFixMe
var sendRequest = function sendRequest(endpoint) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cb = arguments[2];

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
      return cb(new Error('statusCode=' + res.statusCode));
    }
    var buf = [];
    res.on('data', function (c) {
      return buf.push(c);
    });
    res.on('end', function () {
      var d = JSON.parse(Buffer.concat(buf).toString());
      return cb(null, d.data);
    });
    return null;
  });
  req.on('error', function (err) {
    return cb(err);
  });
  req.end();
};

var validateUcpc = function validateUcpc(ucpc) {
  if (!ucpc || ucpc.length !== 25) return false;
  if (typeof ucpc !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
  return true;
};

exports.sendRequest = sendRequest;
exports.validateUcpc = validateUcpc;