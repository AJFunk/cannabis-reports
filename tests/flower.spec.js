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
