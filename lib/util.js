'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUcpc = exports.sendRequest = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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
  return _axios2.default.get(url).then(function (response) {
    return cb(null, response.data.data);
  }).catch(function (err) {
    return cb(err);
  });
};

var validateUcpc = function validateUcpc(ucpc) {
  if (!ucpc || ucpc.length !== 25) return false;
  if (typeof ucpc !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
  return true;
};

exports.sendRequest = sendRequest;
exports.validateUcpc = validateUcpc;