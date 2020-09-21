module.exports = {
  stories: ['../packages/**/*.stories.{ts,tsx,js,jsx}'],
  addons: ['@storybook/addon-links', '@storybook/addon-actions', '@storybook/addon-essentials'],
  typescript: {
    check: true,
  },
};
