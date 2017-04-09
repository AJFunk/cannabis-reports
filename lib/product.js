'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = product;

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function product() {
  function validateProductType(productType) {
    var validTypes = ['bath', 'topical', 'skin care', 'pre-roll', 'lip balm', 'massage oil', 'personal lubricant'];
    if (!productType || typeof productType !== 'string') return false;
    if (validTypes.indexOf(productType) < 0) return false;
    return true;
  }

  return {
    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var deferred = _q2.default.defer();
      (0, _util.sendRequest)('products', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    type: function type(productType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!validateProductType(productType.toLowerCase())) {
        deferred.reject(new Error('Invalid Edible Type.'));
      }
      (0, _util.sendRequest)('products/type/' + productType, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    product: function product(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('products/' + ucpc, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    user: function user(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('products/' + ucpc + '/user', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('products/' + ucpc + '/reviews', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    effectsFlavors: function effectsFlavors(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('products/' + ucpc + '/effectsFlavors', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    producer: function producer(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('products/' + ucpc + '/producer', null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strain: function strain(ucpc) {
      var deferred = _q2.default.defer();
      if (!(0, _util.validateUcpc)(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      (0, _util.sendRequest)('products/' + ucpc + '/strain', null, function (err, data) {
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
      (0, _util.sendRequest)('products/' + ucpc + '/availability/geo/' + lat + '/' + lng + radius, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];