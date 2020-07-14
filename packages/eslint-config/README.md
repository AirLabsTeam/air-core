# `@air/eslint-config`

The centralized Prettier + ESLint configuration for all client-side JS and TS at Air.

## Installation

`yarn add -D @air/eslint-config`

## Usage

Inside `.eslintrc.js`:

```js
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: ['@air/eslint-config'],
};

module.exports = config;
```
