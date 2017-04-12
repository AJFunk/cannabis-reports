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
  function validateProductType(productType) {
    var validTypes = ['bath', 'topical', 'skin care', 'pre-roll', 'lip balm', 'massage oil', 'personal lubricant'];
    if (!productType || typeof productType !== 'string') return false;
    if (validTypes.indexOf(productType) < 0) return false;
    return true;
  }

  return {
    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new _promise2.default(function (resolve, reject) {
        (0, _util.sendRequest)('products', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    type: function type(productType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!validateProductType(productType.toLowerCase())) {
          reject(new Error('Invalid Edible Type.'));
        }
        (0, _util.sendRequest)('products/type/' + productType, options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    product: function product(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('products/' + ucpc, null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    user: function user(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('products/' + ucpc + '/user', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('products/' + ucpc + '/reviews', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    effectsFlavors: function effectsFlavors(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('products/' + ucpc + '/effectsFlavors', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    producer: function producer(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('products/' + ucpc + '/producer', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    strain: function strain(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('products/' + ucpc + '/strain', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    availability: function availability(ucpc, lat, lng) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        if (!lat) reject(new Error('Latitude is required'));
        if (!(typeof lat === 'string' || typeof lat === 'number')) {
          reject(new Error('Latitude must be a string or number.'));
        }
        if (!lng) reject(new Error('Longitude is required'));
        if (!(typeof lng === 'string' || typeof lng === 'number')) {
          reject(new Error('Longitude must be a string or number.'));
        }
        var radius = options && options.radius ? '/' + options.radius : '';
        (0, _util.sendRequest)('products/' + ucpc + '/availability/geo/' + lat + '/' + lng + radius, options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    }
  };
}
module.exports = exports['default'];