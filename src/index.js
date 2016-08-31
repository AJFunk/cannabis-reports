import strain from './strain.js';
import flower from './flower.js';
import extract from './extract.js';
import edible from './edible.js';
import product from './product.js';
import producer from './producer.js';
import dispensary from './dispensary.js';
import seedCompany from './seed-company.js';

const apiKey = process.env.CANNABIS_REPORTS_API_KEY;
const baseUrl = 'https://www.cannabisreports.com/api/v1.0/';

const Strain = strain(apiKey, baseUrl);
const Flower = flower(apiKey, baseUrl);
const Extract = extract(apiKey, baseUrl);
const Edible = edible(apiKey, baseUrl);
const Product = product(apiKey, baseUrl);
const Producer = producer(apiKey, baseUrl);
const Dispensary = dispensary(apiKey, baseUrl);
const SeedCompany = seedCompany(apiKey, baseUrl);

export { Strain, Flower, Extract, Edible, Product, Producer, SeedCompany, Dispensary };
