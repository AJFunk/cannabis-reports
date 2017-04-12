'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = extract;

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

      return new _promise2.default(function (resolve, reject) {
        (0, _util.sendRequest)('extracts', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    type: function type(extractType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!validateExtractType(extractType.toLowerCase())) {
          reject(new Error('Invalid Extract Type.'));
        }
        (0, _util.sendRequest)('extracts/type/' + extractType, options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    extract: function extract(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('extracts/' + ucpc, null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    user: function user(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('extracts/' + ucpc + '/user', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('extracts/' + ucpc + '/reviews', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    effectsFlavors: function effectsFlavors(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('extracts/' + ucpc + '/effectsFlavors', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    producer: function producer(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('extracts/' + ucpc + '/producer', null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    strain: function strain(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('extracts/' + ucpc + '/strain', null, function (err, data) {
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
        (0, _util.sendRequest)('extracts/' + ucpc + '/availability/geo/' + lat + '/' + lng + radius, options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    }
  };
}
module.exports = exports['default'];