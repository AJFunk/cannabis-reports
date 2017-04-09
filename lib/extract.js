'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extract;

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extract() {
  function validateExtractType(extractType) {
    var validTypes = ['kief', 'hash', 'water-hash', 'oil', 'wax', 'crumble', 'honeycomb', 'shatter', 'vaporizer-disposable', 'vaporizer-cartridge'];
    if (!extractType || typeof extractType !== 'string') return false;
    if (validTypes.indexOf(extractType) < 0) return false;
    return true;
  }

  return {
    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var deferred = _q2.default.defer();
      (0, _util.sendRequest)('extracts', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    type: function type(extractType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!validateExtractType(extractType.toLowerCase())) {
        deferred.reject(new Error('Invalid Extract Type.'));
      }
      (0, _util.sendRequest)('extracts/type/' + extractType, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    extract: function extract(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('extracts/' + ucpc, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    user: function user(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('extracts/' + ucpc + '/user', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('extracts/' + ucpc + '/reviews', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    effectsFlavors: function effectsFlavors(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('extracts/' + ucpc + '/effectsFlavors', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    producer: function producer(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('extracts/' + ucpc + '/producer', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strain: function strain(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('extracts/' + ucpc + '/strain', null, function (err, data) {
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
      (0, _util.sendRequest)('extracts/' + ucpc + '/availability/geo/' + lat + '/' + lng + radius, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];