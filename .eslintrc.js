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
  overrides: [
    ...config.overrides,
    {
      files: '**/zephyr/**/*.test.tsx',
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: '@testing-library/react',
                message:
                  'Please use `../test-utils` instead, so that the ThemeProvider is automatically consumed.',
              },
            ],
          },
        ],
      },
    },
  ],
};
