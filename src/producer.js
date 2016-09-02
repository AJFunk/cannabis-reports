import axios from 'axios';
import Q from 'q';

export default function producer(apiKey: string, baseUrl: string): object {
  function sendRequest(endpoint: string, options: object = {}, cb: object): undefined {
    let url = `${baseUrl}producers${(endpoint ? `/${endpoint}?` : '?')}`;
    if (options) {
      if (options.sort) url = `${url}sort=${options.sort}&`;
      if (options.page) url = `${url}page=${options.page}`;
    }
    axios.get(url)
    .then((response: object): object => cb(null, response.data))
    .catch((err: object): object => cb(err));
  }

  function validateUcpc(ucpc: string): boolean {
    if (!ucpc || ucpc.length !== 25) return false;
    if (typeof(ucpc) !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
    return true;
  }

  return {

    all(options: object): undefined {
      const deferred = Q.defer();
      sendRequest(null, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    producer(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}`, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    extracts(ucpc: string, options: object): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/extracts`, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    edibles(ucpc: string, options: object): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/edibles`, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    products(ucpc: string, options: object): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/products`, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    availability(ucpc: string, lat: string, lng: string, options: object): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      if (!lat) deferred.reject(new Error('Latitude is required'));
      if (!(typeof(lat) === 'string' || typeof(lat) === 'number')) {
        deferred.reject(new Error('Latitude must be a string or number.'));
      }
      if (!lng) deferred.reject(new Error('Longitude is required'));
      if (!(typeof(lng) === 'string' || typeof(lng) === 'number')) {
        deferred.reject(new Error('Longitude must be a string or number.'));
      }
      const radius = options.radius ? `/${options.radius}` : '';
      sendRequest(`${ucpc}/availability/geo/${lat}/${lng}${radius}`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

  };
}
