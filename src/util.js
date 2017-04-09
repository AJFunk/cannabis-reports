import axios from 'axios';

const sendRequest = (endpoint: string, options: object = {}, cb: object): undefined => {
  let url = `${endpoint}?`;
  if (options) {
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        url = `${url}${key}=${options[key]}&`;
      }
    }
  }
  return axios
    .get(url)
    .then((response: object): object => cb(null, response.data.data))
    .catch((err: object): object => cb(err));
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
