import Q from 'q';
import { sendRequest } from './util';

// TODO validate city and slugs

export default function dispensary(): object {
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
    return false;
  }

  return {

    all(options: object = {}): undefined {
      const deferred = Q.defer();
      sendRequest('dispensaries', options, (err: string, data: object): undefined => {
        if (err) return deferred.reject(err);
        return deferred.resolve(data);
      });
      return deferred.promise;
    },

    dispensary(state: string, city: string, slug: string): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required'));
      const validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`dispensaries/${validState}/${city}/${slug}`,
        null,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    strains(state: string, city: string, slug: string, options: object = {}): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required'));
      const validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`dispensaries/${validState}/${city}/${slug}/strains`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    extracts(state: string, city: string, slug: string, options: object = {}): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required'));
      const validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`dispensaries/${validState}/${city}/${slug}/extracts`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    edibles(state: string, city: string, slug: string, options: object = {}): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required'));
      const validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`dispensaries/${validState}/${city}/${slug}/edibles`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    products(state: string, city: string, slug: string, options: object = {}): undefined {
      const deferred = Q.defer();
      if (!state) deferred.reject(new Error('State is required'));
      const validState = validateState(state);
      if (!validState) deferred.reject(new Error('Invalid State'));
      if (!city) deferred.reject(new Error('City is required.'));
      if (!slug) deferred.reject(new Error('Slug is required.'));
      sendRequest(`dispensaries/${validState}/${city}/${slug}/products`,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

  };
}
