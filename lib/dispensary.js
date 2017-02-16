'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispensary;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO validate city and slugs

function dispensary() {
  function sendRequest(endpoint) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments[2];

    var url = '/dispensaries' + (endpoint ? '/' + endpoint + '?' : '?');
    if (options) {
      if (options.sort) url = url + 'sort=' + options.sort + '&';
      if (options.page) url = url + 'page=' + options.page;
    }
    _axios2.default.get(url).then(function (response) {
      return cb(null, response.data.data);
    }).catch(function (err) {
      return cb(err);
    });
  }

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

      var deferred = _q2.default.defer();
      sendRequest(null, options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    dispensary: function dispensary(state, city, slug) {
      var deferred = _q2.default.defer();
      if (!state) deferred.reject(new Error('State is required'));
      var validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(validState + '/' + city + '/' + slug, null, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    strains: function strains(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var deferred = _q2.default.defer();
      if (!state) deferred.reject(new Error('State is required'));
      var validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(validState + '/' + city + '/' + slug + '/strains', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    extracts: function extracts(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var deferred = _q2.default.defer();
      if (!state) deferred.reject(new Error('State is required'));
      var validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(validState + '/' + city + '/' + slug + '/extracts', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    edibles: function edibles(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var deferred = _q2.default.defer();
      if (!state) deferred.reject(new Error('State is required'));
      var validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(validState + '/' + city + '/' + slug + '/edibles', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },
    products: function products(state, city, slug) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var deferred = _q2.default.defer();
      if (!state) deferred.reject(new Error('State is required'));
      var validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(validState + '/' + city + '/' + slug + '/products', options, function (err, data) {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    }
  };
}
module.exports = exports['default'];