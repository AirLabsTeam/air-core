/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    cy: true,
    Cypress: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint for path alias resolution
    },
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'cypress',
    'import',
    'jest',
    'jsx-a11y',
    'lodash',
    'mdx',
    'react-hooks',
    'react',
    'testing-library',
    'unicorn',
  ],
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:lodash/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/recommended',
  ],
  rules: {
    // Looking for TypeScript Plugin rules? They're in overrides per
    // https://github.com/typescript-eslint/typescript-eslint/issues/1928#issuecomment-617969784

    /**
     * Prettier Plugin Rules
     * @see https://github.com/prettier/eslint-plugin-prettier
     * */
    'prettier/prettier': 'error',

    /**
     * Vanilla ESLint Rules
     * @see https://eslint.org/docs/rules/
     * */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@testing-library/jest-dom',
            message: 'This is done globally. You do not need to import it in your test files.',
          },
          {
            name: 'lodash',
            importNames: ['get'],
            message: 'Please use optional chaining instead.',
          },
        ],
      },
    ],
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-unreachable': 'error',
    'valid-typeof': 'error',
    eqeqeq: 'error',
    'default-param-last': 'error',

    /**
     * React Plugin Rules
     * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
     * */
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    /**
     * Import Plugin Rules
     * @see https://github.com/benmosher/eslint-plugin-import#rules
     * */
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        jpg: 'always',
        json: 'always',
        png: 'always',
        svg: 'always',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'import/no-default-export': 'error',
    'import/no-unresolved': 'error',

    /**
     * JSX-A11Y Plugin Rules
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
     * */
    // 'jsx-a11y/anchor-is-valid': [] // we'll need to customize this to match all our abstracted anchor implementations
    // 'jsx-a11y/label-has-associated-control': [] // we'll need to customize this to match all our abstracted form

    /**
     * Lodash Plugin Rules
     * @see https://github.com/wix/eslint-plugin-lodash
     * */
    'lodash/import-scope': ['error', 'member'],
    'lodash/get': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-noop': 'off',
    'lodash/prefer-includes': 'off', // unicorn plugin covers this

    /**
     * Testing Library Plugin Rules
     * @see https://github.com/testing-library/eslint-plugin-testing-library#supported-rules
     * */
    'testing-library/no-dom-import': ['error', 'react'],

    /**
     * Unicorn Plugin Rules
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules
     * */
    'unicorn/catch-error-name': 'error',
    'unicorn/error-message': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',

    /**
     * Cypress Plugin Rules
     * @see https://github.com/cypress-io/eslint-plugin-cypress#rules
     * */
    'cypress/require-data-selectors': 'error',

    /**
     * Jest Plugin Rules
     * @see https://github.com/jest-community/eslint-plugin-jest#rules
     * */
    'jest/consistent-test-it': ['error'],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: [
          'expect',
          // methods that do an `expect()` under-the-hood
        ],
      },
    ],
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe'],
      },
    ],
    'jest/no-hooks': 'off',
    'jest/no-jasmine-globals': 'error',
    'jest/no-large-snapshots': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
  },
  overrides: [
    /**
     * TypeScript Plugin Rules
     * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
     * */
    {
      files: ['*.{ts,tsx}'],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: [
              'is',
              'should',
              'has',
              'had',
              'can',
              'could',
              'did',
              'does',
              'was',
              'will',
              'would',
            ],
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T'],
          },
          // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
          // Use to lint various variable names
        ],
      },
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      parser: '@typescript-eslint/parser',
    },

    /**
     * MDX Plugin Rules
     * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
     * */
    {
      files: ['*.mdx'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.mdx'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: ['plugin:mdx/overrides'],
      rules: {
        'mdx/no-jsx-html-comments': 'error',
        'mdx/no-unescaped-entities': 'warn',
        'mdx/no-unused-expressions': 'error',
        'mdx/remark': 'off',
        'no-unused-expressions': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
      },
    },

    // True Overrides: When the rule simply doesn't make sense!
    {
      files: ['**/jest.setup.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'lodash',
                importNames: ['get'],
                message: 'Please use optional chaining instead.',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-undef': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.stories.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.test.{js,jsx,ts,tsx}', '*.spec.{js,jsx,ts,tsx}'],
      rules: {
        'function-paren-newline': ['error', 'consistent'],
      },
    },
    {
      files: ['*.spec.{js,jsx,ts,tsx}'],
      rules: {
        'no-unused-expressions': ['off'],
      },
    },
    {
      files: ['cypress/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
        'func-names': 'off',
      },
    },
  ],
};
