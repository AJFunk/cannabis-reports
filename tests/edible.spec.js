import { Edible } from 'index';

describe('Edible.all()', () => {
  it('returns array', () =>
    Edible.all().then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Edible.all({ sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Edible.all({ sort: '-createdAt', page: 5 }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Edible.all({ page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Edible.type()', () => {
  it('returns array', () =>
    Edible.type('baked goods').then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Edible.type('cAndy', { sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Edible.type('Ice Cream', { sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Edible.type('CHOCOLATE', { page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Edible.type('not a real type').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.edible()', () => {
  it('returns object', () =>
    Edible.edible('4KXM32V9YFC3G2EUNWP400000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Edible.edible('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.edible('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.edible('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.edible('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.edible('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.user()', () => {
  it('returns object', () =>
    Edible.user('4KXM32V9YFC3G2EUNWP400000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Edible.user('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.user('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.user('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.user('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.user('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.reviews()', () => {
  it('returns array', () =>
    Edible.reviews('4KXM32V9YFC3G2EUNWP400000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Edible.reviews('4KXM32V9YFC3G2EUNWP400000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Edible.reviews('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.reviews('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.reviews('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.reviews('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.reviews('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.effectsFlavors()', () => {
  it('returns object', () =>
    Edible.effectsFlavors('4KXM32V9YFC3G2EUNWP400000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Edible.effectsFlavors('VUJCJ4TYMG00000000000000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.effectsFlavors('VUJCJ4TYMG00&000000000000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.effectsFlavors('VUJCJ4TYMG00 000000000000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.effectsFlavors('VUJCJ4TYMG00_000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.effectsFlavors('VUJCJ4TYMG00!000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.producer()', () => {
  it('returns object', () =>
    Edible.producer('4KXM32V9YFC3G2EUNWP400000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Edible.producer('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.producer('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.producer('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.producer('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.producer('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.strain()', () => {
  it('returns object', () =>
    Edible.strain('4KXM32V9YFC3G2EUNWP400000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Edible.strain('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.strain('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.strain('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.strain('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.strain('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Edible.availability()', () => {
  it('returns array', () =>
    Edible.availability('4KXM32V9YFC3G2EUNWP400000', 37.7749295, -122.4194155)
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Edible.availability('4KXM32V9YFC3G2EUNWP400000', '37.7749295', '-122.4194155')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Edible.availability('4KXM32V9YFC3G2EUNWP400000', 37.7749295, -122.4194155, { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Edible.availability('4KXM32V9YFC3G2EUNWP400000', '37.7749295', '-122.4194155', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00000000000000', [37.7749295], -122.4194155)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00000000000000', 37.7749295, [-122.4194155])
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00000000000000', 37.7749295)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00&000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00 000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00_000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Edible.availability('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});
