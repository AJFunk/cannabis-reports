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
        return (0, _util.sendRequest)('strains', options, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    search: function search(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!query || typeof query !== 'string') {
          return reject(new Error('A string query is required.'));
        }
        return (0, _util.sendRequest)('strains/search/' + query, options, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    strain: function strain(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc, null, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    user: function user(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/user', null, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/reviews', options, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    effectsFlavors: function effectsFlavors(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/effectsFlavors', null, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    seedCompany: function seedCompany(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/seedCompany', null, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    genetics: function genetics(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/genetics', null, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    children: function children(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        return (0, _util.sendRequest)('strains/' + ucpc + '/children', options, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    },

    availability: function availability(ucpc, lat, lng) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) return reject(new Error('Invalid UCPC.'));
        if (!lat) return reject(new Error('Latitude is required'));
        if (!(typeof lat === 'string' || typeof lat === 'number')) {
          return reject(new Error('Latitude must be a string or number.'));
        }
        if (!lng) return reject(new Error('Longitude is required'));
        if (!(typeof lng === 'string' || typeof lng === 'number')) {
          return reject(new Error('Longitude must be a string or number.'));
        }
        var radius = options && options.radius ? '/' + options.radius : '';
        return (0, _util.sendRequest)('strains/' + ucpc + '/availability/geo/' + lat + '/' + lng + '/' + radius, options, function (err, data) {
          if (err) return reject(err);
          return data ? resolve(data) : reject(new Error('No data found'));
        });
      });
    }

  };
}
module.exports = exports['default'];