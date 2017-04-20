// @flow
// $FlowFixMe
import { https } from './redirects';
import { apiKey } from './config';

const sendRequest = (endpoint: string, options: Object | null = {}, cb: Function): void => {
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
      return cb(new Error(`statusCode=${res.statusCode}`));
    }
    const buf = [];
    res.on('data', (c: Object): number => buf.push(c));
    res.on('end', (): Object => {
      const d = JSON.parse(Buffer.concat(buf).toString());
      return cb(null, d.data);
    });
    return null;
  });
  req.on('error', (err: Object): Object => cb(err));
  req.end();
};

const validateUcpc = (ucpc: string): boolean => {
  if (!ucpc || ucpc.length !== 25) return false;
  if (typeof(ucpc) !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
  return true;
};

export {
  sendRequest,
  validateUcpc,
};
