'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = seedCompany;

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function seedCompany() {
  return {
    seedCompany: function seedCompany(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('seed-companies/' + ucpc, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strains: function strains(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('seed-companies/' + ucpc + '/strains', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('seed-companies/' + ucpc + '/reviews', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];