const config = require('./packages/eslint-config/index');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  ...config,
  rules: {
    ...config.rules,
    'import/no-extraneous-dependencies': 'off', // not every package explicitly lists their dev deps
  },
};
