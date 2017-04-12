import { setCannabisReportsKey } from './config';

const Strain = require('./strain')();
const Flower = require('./flower')();
const Extract = require('./extract')();
const Edible = require('./edible')();
const Product = require('./product')();
const Producer = require('./producer')();
const Dispensary = require('./dispensary')();
const SeedCompany = require('./seed-company')();

export {
  Strain,
  Flower,
  Extract,
  Edible,
  Product,
  Producer,
  SeedCompany,
  Dispensary,
  setCannabisReportsKey,
};
