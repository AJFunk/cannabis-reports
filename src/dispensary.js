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
      return new Promise((resolve: object, reject: object): undefined => {
        sendRequest('dispensaries', options, (err: string, data: object): undefined => {
          if (err) return reject(new Error(err));
          return resolve(data);
        });
      });
    },

    dispensary(state: string, city: string, slug: string): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!state) reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        sendRequest(`dispensaries/${validState}/${city}/${slug}`,
          null,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    strains(state: string, city: string, slug: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!state) reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        sendRequest(`dispensaries/${validState}/${city}/${slug}/strains`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    extracts(state: string, city: string, slug: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!state) reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        sendRequest(`dispensaries/${validState}/${city}/${slug}/extracts`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    edibles(state: string, city: string, slug: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!state) reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        sendRequest(`dispensaries/${validState}/${city}/${slug}/edibles`,
          options,
          (err: string, data: object): undefined => {
            if (err) return reject(new Error(err));
            return resolve(data);
          }
        );
      });
    },

    products(state: string, city: string, slug: string, options: object = {}): undefined {
      return new Promise((resolve: object, reject: object): undefined => {
        if (!state) reject(new Error('State is required'));
        const validState = validateState(state);
        if (!validState) reject(new Error('Invalid State'));
        if (!city) reject(new Error('City is required.'));
        if (!slug) reject(new Error('Slug is required.'));
        sendRequest(`dispensaries/${validState}/${city}/${slug}/products`,
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
