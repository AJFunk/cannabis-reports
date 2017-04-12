'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = seedCompany;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function seedCompany() {
  return {
    seedCompany: function seedCompany(ucpc) {
      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('seed-companies/' + ucpc, null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    strains: function strains(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('seed-companies/' + ucpc + '/strains', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    reviews: function reviews(ucpc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!(0, _util.validateUcpc)(ucpc)) reject(new Error('Invalid UCPC.'));
        (0, _util.sendRequest)('seed-companies/' + ucpc + '/reviews', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    }
  };
}
module.exports = exports['default'];