import {
  sendRequest,
  validateUcpc,
} from './util';

export default function strain(): object {
  return {

    all(options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        sendRequest('strains', options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    search(query: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!query || typeof(query) !== 'string') {
          reject(new Error('A string query is required.'));
        }
        sendRequest(`strains/search/${query}`, options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    strain(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    user(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}/user`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    reviews(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}/reviews`, options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    effectsFlavors(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}/effectsFlavors`,
          null,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    seedCompany(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}/seedCompany`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    genetics(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}/genetics`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    children(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`strains/${ucpc}/children`, options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    availability(ucpc: string, lat: string, lng: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        if (!lat) reject(new Error('Latitude is required'));
        if (!(typeof(lat) === 'string' || typeof(lat) === 'number')) {
          reject(new Error('Latitude must be a string or number.'));
        }
        if (!lng) reject(new Error('Longitude is required'));
        if (!(typeof(lng) === 'string' || typeof(lng) === 'number')) {
          reject(new Error('Longitude must be a string or number.'));
        }
        const radius = (options && options.radius) ? `/${options.radius}` : '';
        sendRequest(`strains/${ucpc}/availability/geo/${lat}/${lng}/${radius}`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

  };
}
