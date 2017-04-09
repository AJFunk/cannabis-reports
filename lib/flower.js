'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flower;

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flower() {
  function validateFlowerType(flowerType) {
    var validTypes = ['flowers', 'seeds', 'clones', 'shake'];
    if (!flowerType || typeof flowerType !== 'string') return false;
    if (validTypes.indexOf(flowerType) < 0) return false;
    return true;
  }

  return {
    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var deferred = _q2.default.defer();
      (0, _util.sendRequest)('flowers', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    type: function type(flowerType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!validateFlowerType(flowerType.toLowerCase())) {
        deferred.reject(new Error('Invalid Flower Type.'));
      }
      (0, _util.sendRequest)('flowers/type/' + flowerType, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    flower: function flower(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('flowers/' + ucpc, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    user: function user(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('flowers/' + ucpc + '/user', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('flowers/' + ucpc + '/reviews', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    effectsFlavors: function effectsFlavors(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('flowers/' + ucpc + '/effectsFlavors', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    producer: function producer(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('flowers/' + ucpc + '/producer', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strain: function strain(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('flowers/' + ucpc + '/strain', null, function (err, data) {
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
      (0, _util.sendRequest)('flowers/' + ucpc + '/availability/geo/' + lat + '/' + lng + radius, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];