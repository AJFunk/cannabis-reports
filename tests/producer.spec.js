import { Producer } from 'index';

describe('Producer.all()', () => {
  it('returns array', () =>
    Producer.all().then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Producer.all({ sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Producer.all({ sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.all({ page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Producer.producer()', () => {
  it('returns object', () =>
    Producer.producer('0000000000L6M7E0000000000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Producer.producer('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.producer('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.producer('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.producer('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.producer('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Producer.extracts()', () => {
  it('returns array', () =>
    Producer.extracts('0000000000L6M7E0000000000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.extracts('0000000000L6M7E0000000000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Producer.extracts('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.extracts('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.extracts('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.extracts('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.extracts('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Producer.edibles()', () => {
  it('returns array', () =>
    Producer.edibles('0000000000L6M7E0000000000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.edibles('0000000000L6M7E0000000000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Producer.edibles('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.edibles('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.edibles('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.edibles('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.edibles('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Producer.products()', () => {
  it('returns array', () =>
    Producer.products('0000000000L6M7E0000000000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.products('0000000000L6M7E0000000000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Producer.products('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.products('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.products('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.products('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.products('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Producer.availability()', () => {
  it('returns array', () =>
    Producer.availability('0000000000L6M7E0000000000', 37.7749295, -122.4194155)
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.availability('0000000000L6M7E0000000000', '37.7749295', '-122.4194155')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.availability('0000000000L6M7E0000000000', 37.7749295, -122.4194155, { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Producer.availability('0000000000L6M7E0000000000', '37.7749295', '-122.4194155', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00000000000000', [37.7749295], -122.4194155)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00000000000000', 37.7749295, [-122.4194155])
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00000000000000', 37.7749295)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Producer.availability('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});
