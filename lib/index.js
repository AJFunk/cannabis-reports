'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CannabisConfig = exports.Dispensary = exports.SeedCompany = exports.Producer = exports.Product = exports.Edible = exports.Extract = exports.Flower = exports.Strain = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _strain = require('./strain.js');

var _strain2 = _interopRequireDefault(_strain);

var _flower = require('./flower.js');

var _flower2 = _interopRequireDefault(_flower);

var _extract = require('./extract.js');

var _extract2 = _interopRequireDefault(_extract);

var _edible = require('./edible.js');

var _edible2 = _interopRequireDefault(_edible);

var _product = require('./product.js');

var _product2 = _interopRequireDefault(_product);

var _producer = require('./producer.js');

var _producer2 = _interopRequireDefault(_producer);

var _dispensary = require('./dispensary.js');

var _dispensary2 = _interopRequireDefault(_dispensary);

var _seedCompany = require('./seed-company.js');

var _seedCompany2 = _interopRequireDefault(_seedCompany);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.headers.common['X-API-Key'] = process.env.CANNABIS_REPORTS_API_KEY || '';
_axios2.default.defaults.baseURL = 'https://www.cannabisreports.com/api/v1.0/';

var Strain = (0, _strain2.default)();
var Flower = (0, _flower2.default)();
var Extract = (0, _extract2.default)();
var Edible = (0, _edible2.default)();
var Product = (0, _product2.default)();
var Producer = (0, _producer2.default)();
var Dispensary = (0, _dispensary2.default)();
var SeedCompany = (0, _seedCompany2.default)();

var CannabisConfig = {
  key: function key(_key) {
    _axios2.default.defaults.headers.common['X-API-Key'] = _key;
    return;
  }
};

exports.Strain = Strain;
exports.Flower = Flower;
exports.Extract = Extract;
exports.Edible = Edible;
exports.Product = Product;
exports.Producer = Producer;
exports.SeedCompany = SeedCompany;
exports.Dispensary = Dispensary;
exports.CannabisConfig = CannabisConfig;