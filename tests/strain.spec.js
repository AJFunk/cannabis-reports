import { Strain } from 'index';

describe('Strain.all()', () => {
  it('returns array', () =>
    Strain.all().then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by name', () =>
    Strain.all({ sort: 'name' }).then((data) => {
      expect(data[0].name).to.be.below(data[1].name);
      expect(data[0].name).to.be.below(data[data.length - 1].name);
    })
  );
  it('returns array sorted by name', () =>
    Strain.all({ sort: 'name', page: 5 }).then((data) => {
      expect(data[0].name).to.be.below(data[1].name);
      expect(data[0].name).to.be.below(data[data.length - 1].name);
    })
  );
  it('returns array', () =>
    Strain.all({ page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Strain.search()', () => {
  it('returns array', () =>
    Strain.search('orange').then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Strain.search({ testing: 'testing' }).catch((err) => expect(err).to.be.an('error'))
  );
  it('returns array', () =>
    Strain.search('orange', { page: 2 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Strain.strain()', () => {
  it('returns object', () =>
    Strain.strain('VUJCJ4TYMG000000000000000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Strain.strain('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.strain('VUJCJ4TYMG00&00000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.strain('VUJCJ4TYMG00 00000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.strain('VUJCJ4TYMG00_000000&0000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.strain('VUJCJ4TYMG00!000000&0000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Strain.user()', () => {
  it('returns object', () =>
    Strain.user('VUJCJ4TYMG000000000000000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Strain.user('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.user('VUJCJ4TYMG00&00000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.user('VUJCJ4TYMG00 00000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.user('VUJCJ4TYMG00_000000&0000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.user('VUJCJ4TYMG00!000000&0000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Strain.reviews()', () => {
  it('returns array', () =>
    Strain.reviews('VUJCJ4TYMG000000000000000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Strain.reviews('VUJCJ4TYMG000000000000000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Strain.reviews('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.reviews('VUJCJ4TYMG00&00000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.reviews('VUJCJ4TYMG00 00000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.reviews('VUJCJ4TYMG00_000000&0000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Strain.reviews('VUJCJ4TYMG00!000000&0000').catch((err) => expect(err).to.be.an('error'))
  );
});
