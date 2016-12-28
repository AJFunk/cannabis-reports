import { SeedCompany } from 'index';

describe('SeedCompany.seedCompany()', () => {
  it('returns object', () =>
    SeedCompany.seedCompany('VUJCJ00000000000000000000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    SeedCompany.seedCompany('VUJCJ4TYMG00!000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
});

describe('SeedCompany.strains()', () => {
  it('returns array', () =>
    SeedCompany.strains('VUJCJ00000000000000000000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    SeedCompany.strains('VUJCJ00000000000000000000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    SeedCompany.strains('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('SeedCompany.reviews()', () => {
  it('returns array', () =>
    SeedCompany.reviews('VUJCJ00000000000000000000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    SeedCompany.reviews('VUJCJ00000000000000000000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    SeedCompany.reviews('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});
