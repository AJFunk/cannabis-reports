import strain from './strain.js';

const apiKey = process.env.CANNABIS_REPORTS_API_KEY;
const baseUrl = 'https://www.cannabisreports.com/api/v1.0/';

const Strain = strain(apiKey, baseUrl);
Strain
  .all()
  .then(function cb(data){
    console.log(data);
  });

export { Strain };
