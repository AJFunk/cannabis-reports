import axios from 'axios';
import Q from 'q';

export default function flower(): object {
  function sendRequest(endpoint: string, options: object = {}, cb: object): undefined {
    let url = `/flowers${(endpoint ? `/${endpoint}?` : '?')}`;
    if (options) {
      if (options.sort) url = `${url}sort=${options.sort}&`;
      if (options.page) url = `${url}page=${options.page}`;
    }
    axios.get(url)
    .then((response: object): object => cb(null, response.data.data))
    .catch((err: object): object => cb(err));
  }

  function validateUcpc(ucpc: string): boolean {
    if (!ucpc || ucpc.length !== 25) return false;
    if (typeof(ucpc) !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
    return true;
  }

  function validateFlowerType(flowerType: string): boolean {
    const validTypes = ['flowers', 'seeds', 'clones', 'shake'];
    if (!flowerType || typeof(flowerType) !== 'string') return false;
    if (validTypes.indexOf(flowerType) < 0) return false;
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

    type(flowerType: string, options: object): undefined {
      const deferred = Q.defer();
      if (!validateFlowerType(flowerType.toLowerCase())) {
        deferred.reject(new Error('Invalid Flower Type.'));
      }
      sendRequest(`type/${flowerType}`, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    flower(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}`, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    user(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/user`, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    reviews(ucpc: string, options: object): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/reviews`, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    effectsFlavors(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/effectsFlavors`, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    producer(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/producer`, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    strain(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(`${ucpc}/strain`, null, (err: string, data: object): undefined => {
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
      const radius = (options && options.radius) ? `/${options.radius}` : '';
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
