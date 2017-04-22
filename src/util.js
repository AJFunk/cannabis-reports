// @flow
// $FlowFixMe
import { https } from './redirects';
import { apiKey } from './config';

const handleResult = (resolve: (data: Object) => void,
                      reject: (reason: Error) => void,
                      err: Error | null,
                      data?: Object): mixed => {
  if (err) return reject(err);
  return data ? resolve(data) : reject(new Error('No data found'));
};

const sendRequest = (endpoint: string,
                     options: Object | null = {},
                     resolve: (data: Object) => void,
                     reject: (reason: Error) => void,
                     cb: Function): void => {
  let url = `${endpoint}?`;
  if (options) {
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        url = `${url}${key}=${options[key]}&`;
      }
    }
  }
  url = url.replace(/\s/g, '%20');
  if (url[url.length - 1] === '&' || url[url.length - 1] === '?') {
    url = url.substr(0, url.length - 1);
  }

  const params = {
    host: 'www.cannabisreports.com',
    path: `/api/v1.0/${url}`,
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
    },
  };

  const req = https.request(params, (res: Object): null => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb(resolve, reject, new Error(`statusCode=${res.statusCode}`));
    }
    let body = '';
    res.on('data', (c: Object): void => {
      body += c.toString();
    });
    res.on('end', (): Object => {
      const d = JSON.parse(body);
      return cb(resolve, reject, null, d.data);
    });
    return null;
  });
  req.on('error', (err: Object): Object => cb(resolve, reject, err));
  req.end();
};

const validateUcpc = (ucpc: string): boolean => {
  if (!ucpc || ucpc.length !== 25) return false;
  if (typeof(ucpc) !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
  return true;
};

export {
  handleResult,
  sendRequest,
  validateUcpc,
};
