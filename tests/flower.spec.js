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
