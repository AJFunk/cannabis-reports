import { apiKey } from 'config';
import { setCannabisReportsKey } from 'index';

describe('setCannabisReportsKey()', () => {
  it('sets apiKey', () => {
    const oldKey = apiKey;
    setCannabisReportsKey('1234');
    expect(apiKey).to.be.equal('1234');
    return setCannabisReportsKey(oldKey);
  });
});
