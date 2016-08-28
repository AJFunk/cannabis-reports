import strain from './strain.js';
import flower from './flower.js';

const apiKey = process.env.CANNABIS_REPORTS_API_KEY;
const baseUrl = 'https://www.cannabisreports.com/api/v1.0/';

const Strain = strain(apiKey, baseUrl);
const Flower = flower(apiKey, baseUrl);

export { Strain, Flower };
