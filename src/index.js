import axios from 'axios';

axios.defaults.headers.common['X-API-Key'] = process.env.CANNABIS_REPORTS_API_KEY || '';
axios.defaults.baseURL = 'https://www.cannabisreports.com/api/v1.0/';

import strain from './strain';
import flower from './flower';
import extract from './extract';
import edible from './edible';
import product from './product';
import producer from './producer';
import dispensary from './dispensary';
import seedCompany from './seed-company';

const Strain = strain();
const Flower = flower();
const Extract = extract();
const Edible = edible();
const Product = product();
const Producer = producer();
const Dispensary = dispensary();
const SeedCompany = seedCompany();

const CannabisConfig = {
  key: (key: string): undefined => {
    axios.defaults.headers.common['X-API-Key'] = key;
    return;
  },
};

export {
  Strain,
  Flower,
  Extract,
  Edible,
  Product,
  Producer,
  SeedCompany,
  Dispensary,
  CannabisConfig,
};
