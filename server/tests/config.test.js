/* eslint-disable global-require */
/* eslint-disable no-return-await */
/* eslint-disable no-undef */

const listKeys = (obj, results = []) => {
  const r = results;
  Object.keys(obj).forEach((key) => {
    r.push(key);

    if (typeof obj[key] === 'object') {
      listKeys(obj[key], r);
    }
  });
  return r;
};

// TODO: this only tests the hard-coded insensitive configs, still need to test sensitive configs from env variables somehow
describe('config ', () => {
  /**
   * Tests that validate you have set all environment variables properly
   */
  it('Ensure configs across all environments have the same keys', async () => {
    const development = require('../src/config/environments/development');
    const staging = require('../src/config/environments/staging');
    const production = require('../src/config/environments/production');

    const developmentKeys = listKeys(development);
    const stagingKeys = listKeys(staging);
    const productionKeys = listKeys(production);

    // enforce all environments have the same keys in the same order
    expect(developmentKeys).toEqual(stagingKeys);
    expect(stagingKeys).toEqual(productionKeys);
  });
});
