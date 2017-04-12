import {
  sendRequest,
  validateUcpc,
} from './util';

export default function producer(): object {
  return {

    all(options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        sendRequest('producers', options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    producer(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`producers/${ucpc}`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    extracts(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(
          `producers/${ucpc}/extracts`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    edibles(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(
          `producers/${ucpc}/edibles`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    products(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(
          `producers/${ucpc}/products`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
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
        sendRequest(`producers/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
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
