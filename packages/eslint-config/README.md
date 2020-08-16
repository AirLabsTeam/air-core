# `@air/eslint-config`

The centralized Prettier + ESLint configuration for all client-side JS and TS at Air. Note, there are some rules which presume you leverage `Next.js`./

## Installation

`yarn add -D @air/eslint-config`

## Usage

Inside `.eslintrc.js`:

```js
const config = require('@air/eslint-config');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  // easily lets you merge and alter existing config blobs as opposed to using just the `extends` key
  ...config,
};
```
