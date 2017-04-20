// @flow
import {
  handleResult,
  sendRequest,
  validateUcpc,
} from './util';

export default function producer(): Object {
  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          'producers',
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    producer: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `producers/${ucpc}`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    extracts: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `producers/${ucpc}/extracts`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

    edibles: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `producers/${ucpc}/edibles`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

    products: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `producers/${ucpc}/products`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

    availability: (ucpc: string, lat: string, lng: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        if (typeof lat === 'undefined') return reject(new Error('Latitude is required'));
        if (typeof lng === 'undefined') return reject(new Error('Longitude is required'));
        const radius = (options && options.radius) ? `/${options.radius}` : '';
        return sendRequest(
          `producers/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
