import request from 'request';
import Q from 'q';

// TODO
// Add state validation!
// Allow users to enter a full state name
// For example, "California" would be converted to "CA"
// Also validate city and slugs

export default function dispensary(apiKey: string, baseUrl: string): object {
  function sendRequest(endpoint: string, options: object = {}, cb: object): undefined {
    let url = `${baseUrl}dispensaries${(endpoint ? `/${endpoint}?` : '?')}`;
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

  return {

    all(options: object): undefined {
      const deferred = Q.defer();
      sendRequest(null, options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    dispensary(state: string, city: string, slug: string): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required.'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`${state}/${city}/${slug}`, null, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    strains(state: string, city: string, slug: string, options: object): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required.'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`${state}/${city}/${slug}/strains`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    extracts(state: string, city: string, slug: string, options: object): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required.'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`${state}/${city}/${slug}/extracts`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    edibles(state: string, city: string, slug: string, options: object): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required.'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`${state}/${city}/${slug}/edibles`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    products(state: string, city: string, slug: string, options: object): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required.'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`${state}/${city}/${slug}/products`,
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
