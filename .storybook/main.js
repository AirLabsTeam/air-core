module.exports = {
  stories: ['../packages/**/*.stories.{ts,tsx,js,jsx,mdx}'],
  addons: ['@storybook/addon-links', '@storybook/addon-actions', '@storybook/addon-essentials'],
  /**
   * We're prevented from type-checking out stories because of styled-components' poorly defined type package
   * @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33015
   * */
  // typescript: {
  //   check: true,
  // },
};
