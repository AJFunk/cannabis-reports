import strain from './strain.js';
import flower from './flower.js';
import extract from './extract.js';
import edible from './edible.js';
import product from './product.js';

const apiKey = process.env.CANNABIS_REPORTS_API_KEY;
const baseUrl = 'https://www.cannabisreports.com/api/v1.0/';

const Strain = strain(apiKey, baseUrl);
const Flower = flower(apiKey, baseUrl);
const Extract = extract(apiKey, baseUrl);
const Edible = edible(apiKey, baseUrl);
const Product = product(apiKey, baseUrl);

export { Strain, Flower, Extract, Edible, Product };
