'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = product;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function product() {
  return {

    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        return (0, _util.sendRequest)('products', options, resolve, reject, _util.handleResult);
      });
    },

    type: function type(productType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        return (0, _util.sendRequest)('products/type/' + productType, options, resolve, reject, _util.handleResult);
      });
    },

    product: function product(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('products/' + ucpc, null, resolve, reject, _util.handleResult);
      });
    },

    user: function user(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('products/' + ucpc + '/user', null, resolve, reject, _util.handleResult);
      });
    },

    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('products/' + ucpc + '/reviews', options, resolve, reject, _util.handleResult);
      });
    },

    effectsFlavors: function effectsFlavors(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('products/' + ucpc + '/effectsFlavors', null, resolve, reject, _util.handleResult);
      });
    },

    producer: function producer(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('products/' + ucpc + '/producer', null, resolve, reject, _util.handleResult);
      });
    },

    strain: function strain(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('products/' + ucpc + '/strain', null, resolve, reject, _util.handleResult);
      });
    },

    availability: function availability(ucpc, lat, lng) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        if (typeof lat === 'undefined') return reject(new Error('Latitude is required'));
        if (typeof lng === 'undefined') return reject(new Error('Longitude is required'));
        var radius = options && options.radius ? '/' + options.radius : '';
        return (0, _util.sendRequest)('products/' + ucpc + '/availability/geo/' + lat + '/' + lng + radius, options, resolve, reject, _util.handleResult);
      });
    }

  };
}
module.exports = exports['default'];