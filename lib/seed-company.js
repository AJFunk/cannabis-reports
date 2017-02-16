'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = seedCompany;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function seedCompany() {
  function sendRequest(endpoint) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments[2];

    var url = '/seed-companies' + (endpoint ? '/' + endpoint + '?' : '?');
    if (options) {
      if (options.sort) url = url + 'sort=' + options.sort + '&';
      if (options.page) url = url + 'page=' + options.page;
    }
    _axios2.default.get(url).then(function (response) {
      return cb(null, response.data.data);
    }).catch(function (err) {
      return cb(err);
    });
  }

  function validateUcpc(ucpc) {
    if (!ucpc || ucpc.length !== 25) return false;
    if (typeof ucpc !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
    return true;
  }

  return {
    seedCompany: function seedCompany(ucpc) {
      var deferred = _q2.default.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest('' + ucpc, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strains: function strains(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(ucpc + '/strains', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(ucpc + '/reviews', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];