import {
  sendRequest,
  validateUcpc,
} from './util';

export default function edible(): object {
  function validateEdibleType(edibleType: string): boolean {
    const validTypes = [
      'baked goods',
      'candy',
      'treat',
      'chocolate',
      'snack',
      'beverage',
      'pill',
      'tincture',
      'butter',
      'honey',
      'breath',
      'strips',
      'tea',
      'ice cream',
    ];
    if (!edibleType || typeof(edibleType) !== 'string') return false;
    if (validTypes.indexOf(edibleType) < 0) return false;
    return true;
  }

  return {

    all(options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        sendRequest('edibles', options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    type(edibleType: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateEdibleType(edibleType.toLowerCase())) {
          reject(new Error('Invalid Edible Type.'));
        }
        sendRequest(
          `edibles/type/${edibleType}`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    edible(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`edibles/${ucpc}`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    user(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`edibles/${ucpc}/user`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    reviews(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`edibles/${ucpc}/reviews`, options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    effectsFlavors(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`edibles/${ucpc}/effectsFlavors`,
          null,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    producer(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`edibles/${ucpc}/producer`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    strain(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`edibles/${ucpc}/strain`, null, (err: string, data: object): undefined => {
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
        sendRequest(`edibles/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
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
