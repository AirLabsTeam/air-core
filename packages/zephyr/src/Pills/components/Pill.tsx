import React, { ReactNode } from 'react';

import { Box, BoxProps } from '../../Box';

export interface PillProps extends BoxProps {
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
}

export const Pill = ({
  children,
  leftAdornment,
  rightAdornment,
  tx,
  ...restOfProps
}: PillProps) => {
  return (
    <Box
      tx={{
        backgroundColor: 'pigeon025',
        borderRadius: 100,
        ...tx,
      }}
      {...restOfProps}
    >
      {leftAdornment && <Box tx={{ flexShrink: 0, mr: 8 }}>{leftAdornment}</Box>}

      {children}

      {rightAdornment && <Box tx={{ flexShrink: 0, ml: 8 }}>{rightAdornment}</Box>}
    </Box>
  );
};
