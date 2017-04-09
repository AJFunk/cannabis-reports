'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = strain;

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function strain() {
  return {
    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var deferred = _q2.default.defer();
      (0, _util.sendRequest)('strains', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    search: function search(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!query || typeof query !== 'string') {
        deferred.reject(new Error('A string query is required.'));
      }
      (0, _util.sendRequest)('strains/search/' + query, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strain: function strain(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    user: function user(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc + '/user', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc + '/reviews', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    effectsFlavors: function effectsFlavors(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc + '/effectsFlavors', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    seedCompany: function seedCompany(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc + '/seedCompany', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    genetics: function genetics(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc + '/genetics', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    children: function children(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('strains/' + ucpc + '/children', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    availability: function availability(ucpc, lat, lng) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      if (!lat) deferred.reject(new Error('Latitude is required'));
      if (!(typeof lat === 'string' || typeof lat === 'number')) {
        deferred.reject(new Error('Latitude must be a string or number.'));
      }
      if (!lng) deferred.reject(new Error('Longitude is required'));
      if (!(typeof lng === 'string' || typeof lng === 'number')) {
        deferred.reject(new Error('Longitude must be a string or number.'));
      }
      var radius = options && options.radius ? '/' + options.radius : '';
      (0, _util.sendRequest)('strains/' + ucpc + '/availability/geo/' + lat + '/' + lng + '/' + radius, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];