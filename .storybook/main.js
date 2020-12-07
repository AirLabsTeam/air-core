module.exports = {
  stories: ['../packages/**/*.stories.{ts,tsx,js,jsx,mdx}'],
  addons: ['@storybook/addon-links', '@storybook/addon-actions', '@storybook/addon-essentials'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        // If there's no `parent` property it means the type def was defined in the same spot it is being imported from.
        if (!prop.parent) return true;

        const isDOMAttribute = prop.parent.name === 'DOMAttributes';
        const isAriaAttribute = prop.parent.name === 'AriaAttributes';
        const isSharedHTMLAttribute = prop.parent.name === 'HTMLAttributes';

        // We don't want our args table to be drowned out by every possible HTML attribute.
        const shouldDocument = !isDOMAttribute && !isAriaAttribute && !isSharedHTMLAttribute;

        const isTypeDefinedInNodeModules = /node_modules/.test(prop.parent.fileName);

        return !isTypeDefinedInNodeModules || (isTypeDefinedInNodeModules && shouldDocument);
      },
    },
  },
};
