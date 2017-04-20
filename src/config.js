// @flow
let apiKey = process.env.CANNABIS_REPORTS_API_KEY;
const setCannabisReportsKey = (key: string): null => {
  apiKey = key;
  return null;
};

export {
  apiKey,
  setCannabisReportsKey,
};
