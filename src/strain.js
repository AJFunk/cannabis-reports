import request from 'request';
import Q from 'q';

export default function strain(apiKey: string, baseUrl: string): object {
  function sendRequest(ucpc: string, options: object = {}, cb: object): undefined {
    let url = `${baseUrl}strains${(ucpc ? `/${ucpc}?` : '?')}`;
    if (options.sort) url = `${url}sort=${options.sort}&`;
    if (options.page) url = `${url}page=${options.page}`;
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
  };
}
