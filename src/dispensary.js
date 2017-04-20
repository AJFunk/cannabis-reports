// @flow
import { sendRequest } from './util';

// TODO validate city and slugs

export default function dispensary(): Object {
  function validateState(state: string): string {
    const stateNames = [
      'ARIZONA', 'ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO',
      'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA',
      'IOWA', 'KANSAS', 'KENTUCKY', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS',
      'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA',
      'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA',
      'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA',
      'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON',
      'WEST VIRGINIA', 'WISCONSIN', 'WYOMING',
    ];
    const stateAbbr = [
      'AZ', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
      'IA', 'KS', 'KY', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
      'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
      'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
    ];

    if (stateAbbr.indexOf(state.toUpperCase()) > -1) return state;
    const stateNameIdx = stateNames.indexOf(state.toUpperCase());
    if (stateNameIdx > -1) return stateAbbr[stateNameIdx];
    return '';
  }

  return {

    all: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          'dispensaries',
          options,
          (err: Error | null, data?: Object): mixed => {
            if (err) return reject(err);
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        )
      ),

    dispensary: (state: string, city: string, slug: string): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!state) return reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) return reject(new Error('Invalid State'));
        if (!city) return reject(new Error('City is required.'));
        if (!slug) return reject(new Error('Slug is required.'));
        return sendRequest(
          `dispensaries/${validState}/${city}/${slug}`,
          null,
          (err: Error | null, data?: Object): mixed => {
            if (err) return reject(err);
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    strains: (state: string, city: string, slug: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!state) return reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) return reject(new Error('Invalid State'));
        if (!city) return reject(new Error('City is required.'));
        if (!slug) return reject(new Error('Slug is required.'));
        return sendRequest(
          `dispensaries/${validState}/${city}/${slug}/strains`,
          options,
          (err: Error | null, data?: Object): mixed => {
            if (err) return reject(err);
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    extracts: (state: string, city: string, slug: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!state) return reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) return reject(new Error('Invalid State'));
        if (!city) return reject(new Error('City is required.'));
        if (!slug) return reject(new Error('Slug is required.'));
        return sendRequest(
          `dispensaries/${validState}/${city}/${slug}/extracts`,
          options,
          (err: Error | null, data?: Object): mixed => {
            if (err) return reject(err);
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    edibles: (state: string, city: string, slug: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!state) return reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) return reject(new Error('Invalid State'));
        if (!city) return reject(new Error('City is required.'));
        if (!slug) return reject(new Error('Slug is required.'));
        return sendRequest(
          `dispensaries/${validState}/${city}/${slug}/edibles`,
          options,
          (err: Error | null, data?: Object): mixed => {
            if (err) return reject(err);
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    products: (state: string, city: string, slug: string, options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!state) return reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) return reject(new Error('Invalid State'));
        if (!city) return reject(new Error('City is required.'));
        if (!slug) return reject(new Error('Slug is required.'));
        return sendRequest(
          `dispensaries/${validState}/${city}/${slug}/products`,
          options,
          (err: Error | null, data?: Object): mixed => {
            if (err) return reject(err);
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

  };
}
