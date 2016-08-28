import { Flower } from 'index';

describe('Flower.all()', () => {
  it('returns array', () =>
    Flower.all().then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Flower.all({ sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Flower.all({ sort: '-createdAt', page: 5 }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Flower.all({ page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Flower.type()', () => {
  it('returns array', () =>
    Flower.type('flowers').then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Flower.type('sEeds', { sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Flower.type('clONes', { sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Flower.type('Shake', { page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Flower.type('not a real type').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.flower()', () => {
  it('returns object', () =>
    Flower.flower('AHZ7H4N6467FVUDY3DAY00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Flower.flower('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.flower('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.flower('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.flower('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.flower('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.user()', () => {
  it('returns object', () =>
    Flower.user('AHZ7H4N6467FVUDY3DAY00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Flower.user('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.user('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.user('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.user('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.user('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.reviews()', () => {
  it('returns array', () =>
    Flower.reviews('AHZ7H4N6467FVUDY3DAY00000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Flower.reviews('AHZ7H4N6467FVUDY3DAY00000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Flower.reviews('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.reviews('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.reviews('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.reviews('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.reviews('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.effectsFlavors()', () => {
  it('returns object', () =>
    Flower.effectsFlavors('AHZ7H4N6467FVUDY3DAY00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Flower.effectsFlavors('VUJCJ4TYMG00000000000000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.effectsFlavors('VUJCJ4TYMG00&000000000000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.effectsFlavors('VUJCJ4TYMG00 000000000000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.effectsFlavors('VUJCJ4TYMG00_000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.effectsFlavors('VUJCJ4TYMG00!000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.producer()', () => {
  it('returns object', () =>
    Flower.producer('AHZ7H4N6467FVUDY3DAY00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Flower.producer('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.producer('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.producer('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.producer('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.producer('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.strain()', () => {
  it('returns object', () =>
    Flower.strain('AHZ7H4N6467FVUDY3DAY00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Flower.strain('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.strain('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.strain('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.strain('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.strain('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Flower.availability()', () => {
  it('returns array', () =>
    Flower.availability('AHZ7H4N6467FVUDY3DAY00000', 37.7749295, -122.4194155)
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Flower.availability('AHZ7H4N6467FVUDY3DAY00000', '37.7749295', '-122.4194155')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Flower.availability('AHZ7H4N6467FVUDY3DAY00000', 37.7749295, -122.4194155, { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Flower.availability('AHZ7H4N6467FVUDY3DAY00000', '37.7749295', '-122.4194155', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00000000000000', [37.7749295], -122.4194155)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00000000000000', 37.7749295, [-122.4194155])
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00000000000000', 37.7749295)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Flower.availability('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});
