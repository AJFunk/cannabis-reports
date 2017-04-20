// @flow
import {
  handleResult,
  sendRequest,
  validateUcpc,
} from './util';

export default function seedCompany(): Object {
  return {

    seedCompany: (ucpc: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `seed-companies/${ucpc}`,
          null,
          resolve,
          reject,
          handleResult
        );
      }),

    strains: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `seed-companies/${ucpc}/strains`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

    reviews: (ucpc: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!validateUcpc(ucpc)) return reject(new Error('Invalid UCPC.'));
        return sendRequest(
          `seed-companies/${ucpc}/reviews`,
          options,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
