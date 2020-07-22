const config = require('./packages/eslint-config/index');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  ...config,
};
