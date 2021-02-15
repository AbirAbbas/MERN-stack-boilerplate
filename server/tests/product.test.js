/* eslint-disable no-return-await */
/* eslint-disable no-undef */

const dbHandler = require('./config/db');
const product = require('../src/models/product');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => dbHandler.closeDatabase());

/**
 * Complete product example.
 */
const productComplete = {
  name: 'iPhone 11',
  price: 699,
  description: 'A new dual‑camera system captures more of what you see and love. ',
};

/**
 * Product test suite.
 */
describe('product ', () => {
  /**
   * Tests that a valid product can be created through the productService without throwing any errors.
   */
  it('can be created correctly', async () => {
    const productInstance = await product.create(productComplete);
    expect(productInstance).toMatchObject(productComplete);
  });
});
