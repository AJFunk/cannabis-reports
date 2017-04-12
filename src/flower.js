import {
  sendRequest,
  validateUcpc,
} from './util';

export default function flower(): object {
  function validateFlowerType(flowerType: string): boolean {
    const validTypes = ['flowers', 'seeds', 'clones', 'shake'];
    if (!flowerType || typeof(flowerType) !== 'string') return false;
    if (validTypes.indexOf(flowerType) < 0) return false;
    return true;
  }

  return {

    all(options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        sendRequest('flowers', options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    type(flowerType: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateFlowerType(flowerType.toLowerCase())) {
          reject(new Error('Invalid Flower Type.'));
        }
        sendRequest(`flowers/type/${flowerType}`, options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    flower(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`flowers/${ucpc}`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    user(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`flowers/${ucpc}/user`, null, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    reviews(ucpc: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
        sendRequest(`flowers/${ucpc}/reviews`, options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    effectsFlavors(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
      if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
      sendRequest(`flowers/${ucpc}/effectsFlavors`,
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
      sendRequest(`flowers/${ucpc}/producer`, null, (err: string, data: object): undefined => {
        if (err) return reject(new Error(err));
        return resolve(data);
      });
    });
    },

    strain(ucpc: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
      if (!validateUcpc(ucpc)) reject(new Error('Invalid UCPC.'));
      sendRequest(`flowers/${ucpc}/strain`, null, (err: string, data: object): undefined => {
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
      sendRequest(`flowers/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
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
