'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUcpc = exports.sendRequest = undefined;

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var params = {
    host: 'www.cannabisreports.com',
    path: '/api/v1.0/' + url,
    method: 'GET',
    headers: {
      'X-API-Key': _config.apiKey
    }
  };

  var req = _https2.default.request(params, function (res) {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb('statusCode=' + res.statusCode);
    }
    var buf = [];
    res.on('data', function (c) {
      return buf.push(c);
    });
    res.on('end', function () {
      var d = JSON.parse(Buffer.concat(buf));
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