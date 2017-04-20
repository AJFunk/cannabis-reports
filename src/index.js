import { setCannabisReportsKey } from './config';

const Dispensary = require('./dispensary')();
const Edible = require('./edible')();
const Extract = require('./extract')();
const Flower = require('./flower')();
const Producer = require('./producer')();
const Product = require('./product')();
const SeedCompany = require('./seed-company')();
const Strain = require('./strain')();

export {
  Dispensary,
  Edible,
  Extract,
  Flower,
  Producer,
  Product,
  SeedCompany,
  setCannabisReportsKey,
  Strain,
};
