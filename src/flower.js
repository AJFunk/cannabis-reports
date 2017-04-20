// @flow
import {
  handleResult,
  sendRequest,
  validateUcpc,
} from './util';

export default function flower(): Object {
  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          'flowers',
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    type: (flowerType: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          `flowers/type/${flowerType}`,
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    flower: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `flowers/${ucpc}`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    user: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `flowers/${ucpc}/user`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    reviews: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `flowers/${ucpc}/reviews`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

    effectsFlavors: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `flowers/${ucpc}/effectsFlavors`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    producer: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `flowers/${ucpc}/producer`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    strain: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `flowers/${ucpc}/strain`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    availability: (ucpc: string, lat: string, lng: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        if (!lat) return reject(new Error('Latitude is required'));
        if (!(typeof(lat) === 'string' || typeof(lat) === 'number')) {
          return reject(new Error('Latitude must be a string or number.'));
        }
        if (!lng) return reject(new Error('Longitude is required'));
        if (!(typeof(lng) === 'string' || typeof(lng) === 'number')) {
          return reject(new Error('Longitude must be a string or number.'));
        }
        const radius = (options && options.radius) ? `/${options.radius}` : '';
        return sendRequest(`flowers/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
