// @flow
import {
  handleResult,
  sendRequest,
  validateUcpc,
} from './util';

export default function product(): Object {
  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          'products',
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    type: (productType: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(`products/type/${productType}`,
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    product: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `products/${ucpc}`,
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
          `products/${ucpc}/user`,
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
          `products/${ucpc}/reviews`,
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
          `products/${ucpc}/effectsFlavors`,
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
          `products/${ucpc}/producer`,
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
          `products/${ucpc}/strain`,
          null,
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
          `products/${ucpc}/availability/geo/${lat}/${lng}${radius}`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
