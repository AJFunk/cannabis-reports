import { Extract } from 'index';

describe('Extract.all()', () => {
  it('returns array', () =>
    Extract.all().then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Extract.all({ sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Extract.all({ sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Extract.all({ page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Extract.type()', () => {
  it('returns array', () =>
    Extract.type('Kief').then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Extract.type('Hash', { sort: 'createdAt' })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Extract.type('Oil', { sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Extract.type('Wax', { page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Extract.type('not a real type').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.extract()', () => {
  it('returns object', () =>
    Extract.extract('QLG39RN2AFPMR6WLTPLW00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Extract.extract('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.user()', () => {
  it('returns object', () =>
    Extract.user('QLG39RN2AFPMR6WLTPLW00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Extract.user('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.reviews()', () => {
  it('returns array', () =>
    Extract.reviews('QLG39RN2AFPMR6WLTPLW00000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Extract.reviews('QLG39RN2AFPMR6WLTPLW00000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Extract.reviews('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.effectsFlavors()', () => {
  it('returns object', () =>
    Extract.effectsFlavors('QLG39RN2AFPMR6WLTPLW00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Extract.effectsFlavors('VUJCJ4TYMG00!000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.producer()', () => {
  it('returns object', () =>
    Extract.producer('QLG39RN2AFPMR6WLTPLW00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Extract.producer('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.strain()', () => {
  it('returns object', () =>
    Extract.strain('QLG39RN2AFPMR6WLTPLW00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Extract.strain('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Extract.availability()', () => {
  it('returns array', () =>
    Extract.availability('QLG39RN2AFPMR6WLTPLW00000', 37.7749295, -122.4194155)
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Extract.availability('QLG39RN2AFPMR6WLTPLW00000', '37.7749295', '-122.4194155')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Extract.availability('QLG39RN2AFPMR6WLTPLW00000', 37.7749295, -122.4194155, { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Extract.availability('QLG39RN2AFPMR6WLTPLW00000', '37.7749295', '-122.4194155', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Extract.availability('VUJCJ4TYMG00000000000000', [37.7749295], -122.4194155)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Extract.availability('VUJCJ4TYMG00000000000000', 37.7749295, [-122.4194155])
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Extract.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Extract.availability('VUJCJ4TYMG00000000000000', 37.7749295)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Extract.availability('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});
