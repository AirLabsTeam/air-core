const config = require('./packages/eslint-config/index');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: './packages/eslint-config/index.js',
  overrides: [
    ...config.overrides,
    {
      files: ['*'],
      rules: {
        /** This rule doesn't traverse symlinks in workspaces
         * @see https://github.com/benmosher/eslint-plugin-import/issues/1832#issuecomment-646860898
         */
        'import/no-unresolved': ['error', { ignore: ['@air/[S]+$'] }],
      },
    },
  ],
};
