/* eslint-disable global-require */

if (process.env.ENVIRONMENT === 'production') {
  module.exports = require('./environments/production');
} else if (process.env.ENVIRONMENT === 'staging') {
  module.exports = require('./environments/staging');
} else {
  module.exports = require('./environments/development');
}
