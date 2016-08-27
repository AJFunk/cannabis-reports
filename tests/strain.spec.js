import { Strain } from 'index';

describe('strain', () => {
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
