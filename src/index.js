import axios from 'axios';

axios.defaults.headers.common['X-API-Key'] = process.env.CANNABIS_REPORTS_API_KEY || '';
axios.defaults.baseURL = 'https://www.cannabisreports.com/api/v1.0/';

import strain from './strain.js';
import flower from './flower.js';
import extract from './extract.js';
import edible from './edible.js';
import product from './product.js';
import producer from './producer.js';
import dispensary from './dispensary.js';
import seedCompany from './seed-company.js';

const Strain = strain();
const Flower = flower();
const Extract = extract();
const Edible = edible();
const Product = product();
const Producer = producer();
const Dispensary = dispensary();
const SeedCompany = seedCompany();

const CannabisConfig = {
  key: (key: string) => axios.defaults.headers.common['X-API-Key'] = key
}

export { Strain, Flower, Extract, Edible, Product, Producer, SeedCompany, Dispensary, CannabisConfig };
