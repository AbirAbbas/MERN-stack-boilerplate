/* eslint-disable global-require */

const R = require('ramda');

// environment variables will be merged with any hard coded configs
const environmentVariables = require('./environments/environment-variables');

if (process.env.ENVIRONMENT === 'production') {
  module.exports = R.merge(require('./environments/production'), environmentVariables);
} else if (process.env.ENVIRONMENT === 'staging') {
  module.exports = R.merge(require('./environments/staging'), environmentVariables);
} else {
  module.exports = R.merge(require('./environments/development'), environmentVariables);
}
