// @flow
import {
  handleResult,
  sendRequest,
  validateUcpc,
} from './util';

export default function edible(): Object {
  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          'edibles',
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    type: (edibleType: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          `edibles/type/${edibleType}`,
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    edible: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `edibles/${ucpc}`,
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
          `edibles/${ucpc}/user`,
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
          `edibles/${ucpc}/reviews`,
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
          `edibles/${ucpc}/effectsFlavors`,
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
          `edibles/${ucpc}/producer`,
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
          `edibles/${ucpc}/strain`,
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
        return sendRequest(
          `edibles/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
