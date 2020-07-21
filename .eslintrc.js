const config = require('./packages/eslint-config/index');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['*'],
      rules: {
        /** Too many issues within a monorepo in CI
         * @see https://github.com/benmosher/eslint-plugin-import/issues/1832
         * @see https://github.com/benmosher/eslint-plugin-import/issues/1706
         */
        'import/no-unresolved': [!!process.env.CI ? 'off' : 'error'],
      },
    },
  ],
};
