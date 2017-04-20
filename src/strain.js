// @flow
import {
  handleResult,
  sendRequest,
  validateUcpc,
} from './util';

export default function strain(): Object {
  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          'strains',
          options,
          resolve,
          reject,
          handleResult
        )
      ),

    search: (query: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!query || typeof(query) !== 'string') {
          return reject(new Error('A string query is required.'));
        }
        return sendRequest(
          `strains/search/${query}`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

    strain: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `strains/${ucpc}`,
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
          `strains/${ucpc}/user`,
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
          `strains/${ucpc}/reviews`,
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
          `strains/${ucpc}/effectsFlavors`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    seedCompany: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `strains/${ucpc}/seedCompany`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    genetics: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `strains/${ucpc}/genetics`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    children: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `strains/${ucpc}/children`,
          options,
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
        return sendRequest(`strains/${ucpc}/availability/geo/${lat}/${lng}/${radius}`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
