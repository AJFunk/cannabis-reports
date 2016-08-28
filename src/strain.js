import request from 'request';
import Q from 'q';

export default function strain(apiKey: string, baseUrl: string): object {
  function sendRequest(endpoint: string, options: object = {}, cb: object): undefined {
    let url = `${baseUrl}strains${(endpoint ? `/${endpoint}?` : '?')}`;
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

  function validateUcpc(ucpc: string): boolean {
    if (!ucpc || ucpc.length !== 25 || /[^a-zA-Z0-9]/.test(ucpc)) return false;
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

    search(query: string, options: object): undefined {
      const deferred = Q.defer();
      if (!query || typeof(query) !== 'string') {
        deferred.reject(new Error('A string query is required.'));
      }
      sendRequest(`search/${query}`, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    strain(ucpc: string): undefined {
      const deferred = Q.defer();
      if (!validateUcpc(ucpc)) deferred.reject(new Error('Invalid UCPC.'));
      sendRequest(ucpc, null, (err: string, data: object): undefined => {
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

  };
}
