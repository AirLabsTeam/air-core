import { rgba } from 'polished';
import React, { forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export interface ModalProps extends BoxProps {}

export const Modal = forwardRef((props: ModalProps, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      __baseStyles={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: 'white',
        minWidth: 400,
        minHeight: 400,
        borderRadius: 4,
        boxShadow: (props) => `0 4px 20px ${rgba(props.colors.black, 0.12)}`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
});

Modal.displayName = 'Modal';
