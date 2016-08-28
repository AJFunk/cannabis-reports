import request from 'request';
import Q from 'q';

export default function flower(apiKey: string, baseUrl: string): object {
  function sendRequest(endpoint: string, options: object = {}, cb: object): undefined {
    let url = `${baseUrl}flowers${(endpoint ? `/${endpoint}?` : '?')}`;
    if (options) {
      if (options.sort) url = `${url}sort=${options.sort}&`;
      if (options.page) url = `${url}page=${options.page}`;
    }
    request(
      url,
      (err: string, response: string, body: string): object => {
        const result = JSON.parse(body);
        if (err || !result.data) {
          return cb(err || result.status_code);
        }
        return cb(null, result.data);
      }
    );
  }

  // function validateUcpc(ucpc: string): boolean {
  //   if (!ucpc || ucpc.length !== 25) return false;
  //   if (typeof(ucpc) !== 'string' || /[^a-zA-Z0-9]/.test(ucpc)) return false;
  //   return true;
  // }

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

  };
}
