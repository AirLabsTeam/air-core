// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  // NOTE: TSDX's jest config is merged into with this config like so:
  // ...jestConfig
  // where jestConfig is defined under the test command in https://github.com/formium/tsdx/blob/master/src/index.ts

  // Which files should we check coverage for
  collectCoverageFrom: ['<rootDir>/packages/**/src/*.{ts,tsx,js,jsx}'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'lcov'],

  // A set of global variables that need to be available in all test environments
  globals: {
    __DEV__: true,
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
