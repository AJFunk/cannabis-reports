import { Product } from 'index';

describe('Product.all()', () => {
  it('returns array', () =>
    Product.all().then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Product.all({ sort: 'createdAt' }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Product.all({ sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Product.all({ page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
});

describe('Product.type()', () => {
  it('returns array', () =>
    Product.type('Bath').then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Product.type('Topical', { sort: 'createdAt' })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array sorted by createdAt', () =>
    Product.type('Skin Care', { sort: '-createdAt', page: 5 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Product.type('Pre-Roll', { page: 3 }).then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Product.type('not a real type').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.product()', () => {
  it('returns object', () =>
    Product.product('9XVU7NK3PEGLAJ372X4F00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Product.product('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.user()', () => {
  it('returns object', () =>
    Product.user('9XVU7NK3PEGLAJ372X4F00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Product.user('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.reviews()', () => {
  it('returns array', () =>
    Product.reviews('9XVU7NK3PEGLAJ372X4F00000')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Product.reviews('9XVU7NK3PEGLAJ372X4F00000', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Product.reviews('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.effectsFlavors()', () => {
  it('returns object', () =>
    Product.effectsFlavors('9XVU7NK3PEGLAJ372X4F00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Product.effectsFlavors('VUJCJ4TYMG00!000000&00000')
    .catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.producer()', () => {
  it('returns object', () =>
    Product.producer('9XVU7NK3PEGLAJ372X4F00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Product.producer('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.strain()', () => {
  it('returns object', () =>
    Product.strain('9XVU7NK3PEGLAJ372X4F00000')
    .then((data) => expect(typeof(data)).to.equal('object'))
  );
  it('returns error message', () =>
    Product.strain('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});

describe('Product.availability()', () => {
  it('returns array', () =>
    Product.availability('9XVU7NK3PEGLAJ372X4F00000', 37.7749295, -122.4194155)
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Product.availability('9XVU7NK3PEGLAJ372X4F00000', '37.7749295', '-122.4194155')
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Product.availability('9XVU7NK3PEGLAJ372X4F00000', 37.7749295, -122.4194155, { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns array', () =>
    Product.availability('9XVU7NK3PEGLAJ372X4F00000', '37.7749295', '-122.4194155', { page: 2 })
    .then((data) => expect(data).to.be.instanceof(Array))
  );
  it('returns error message', () =>
    Product.availability('VUJCJ4TYMG00000000000000', [37.7749295], -122.4194155)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Product.availability('VUJCJ4TYMG00000000000000', 37.7749295, [-122.4194155])
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Product.availability('VUJCJ4TYMG00000000000000').catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Product.availability('VUJCJ4TYMG00000000000000', 37.7749295)
    .catch((err) => expect(err).to.be.an('error'))
  );
  it('returns error message', () =>
    Product.availability('VUJCJ4TYMG00!000000&00000').catch((err) => expect(err).to.be.an('error'))
  );
});
