---
to: packages/zephyr/src/<%= name %>.tsx
---
import React, { forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export type <%= name %>Props = BoxProps;

export const <%= name %> = forwardRef((props: <%= name %>Props, ref) => {
  return <Box <% if(locals.themeKey){ -%>__themeKey="<%= themeKey %>"<% } -%>{...props} ref={ref} __baseStyles={{}} />;
});

<%= name %>.displayName = '<%= name %>';

