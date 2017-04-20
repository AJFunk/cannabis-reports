'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = strain;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function strain() {
  return {

    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _promise2.default(function (resolve, reject) {
        return (0, _util.sendRequest)('strains', options, resolve, reject, _util.handleResult);
      });
    },

    search: function search(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!query || typeof query !== 'string') {
          return reject(new Error('A string query is required.'));
        }
        return (0, _util.sendRequest)('strains/search/' + query, options, resolve, reject, _util.handleResult);
      });
    },

    strain: function strain(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc, null, resolve, reject, _util.handleResult);
      });
    },

    user: function user(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/user', null, resolve, reject, _util.handleResult);
      });
    },

    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/reviews', options, resolve, reject, _util.handleResult);
      });
    },

    effectsFlavors: function effectsFlavors(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/effectsFlavors', null, resolve, reject, _util.handleResult);
      });
    },

    seedCompany: function seedCompany(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/seedCompany', null, resolve, reject, _util.handleResult);
      });
    },

    genetics: function genetics(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/genetics', null, resolve, reject, _util.handleResult);
      });
    },

    children: function children(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/children', options, resolve, reject, _util.handleResult);
      });
    },

    availability: function availability(ucpc, lat, lng) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        if (typeof lat === 'undefined') return reject(new Error('Latitude is required'));
        if (typeof lng === 'undefined') return reject(new Error('Longitude is required'));
        var radius = options && options.radius ? '/' + options.radius : '';
        return (0, _util.sendRequest)('strains/' + ucpc + '/availability/geo/' + lat + '/' + lng + '/' + radius, options, resolve, reject, _util.handleResult);
      });
    }

  };
}
module.exports = exports['default'];