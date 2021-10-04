---
to: packages/zephyr/src/<%= name %>.tsx
---
import { forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export interface <%= name %>Props extends BoxProps {};

export const <%= name %> = forwardRef((props: <%= name %>Props, ref) => {
  return <Box <% if(locals.asProp){ -%>as="<%= asProp %>"<% } -%> {...props} ref={ref} __baseStyles={{}} />;
});

<%= name %>.displayName = '<%= name %>';
