'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = dispensary;

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO validate city and slugs

function dispensary() {
  function validateState(state) {
    var stateNames = ['ARIZONA', 'ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING'];
    var stateAbbr = ['AZ', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    if (stateAbbr.indexOf(state.toUpperCase()) > -1) return state;
    var stateNameIdx = stateNames.indexOf(state.toUpperCase());
    if (stateNameIdx > -1) return stateAbbr[stateNameIdx];
    return false;
  }

  return {
    all: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new _promise2.default(function (resolve, reject) {
        (0, _util.sendRequest)('dispensaries', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    dispensary: function dispensary(state, city, slug) {
      return new _promise2.default(function (resolve, reject) {
        if (!state) reject(new Error('State is required'));
        var validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        (0, _util.sendRequest)('dispensaries/' + validState + '/' + city + '/' + slug, null, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    strains: function strains(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!state) reject(new Error('State is required'));
        var validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        (0, _util.sendRequest)('dispensaries/' + validState + '/' + city + '/' + slug + '/strains', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    extracts: function extracts(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!state) reject(new Error('State is required'));
        var validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        (0, _util.sendRequest)('dispensaries/' + validState + '/' + city + '/' + slug + '/extracts', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    edibles: function edibles(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!state) reject(new Error('State is required'));
        var validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        (0, _util.sendRequest)('dispensaries/' + validState + '/' + city + '/' + slug + '/edibles', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },
    products: function products(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _promise2.default(function (resolve, reject) {
        if (!state) reject(new Error('State is required'));
        var validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        (0, _util.sendRequest)('dispensaries/' + validState + '/' + city + '/' + slug + '/products', options, function (err, data) {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    }
  };
}
module.exports = exports['default'];