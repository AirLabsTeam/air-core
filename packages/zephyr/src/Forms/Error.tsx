import * as React from 'react';
import { capitalize } from 'lodash';
import { BoxStylingProps } from '../Box';
import { Text } from '../Text';

export interface ErrorProps {
  ['data-testid']: string;

  /** A unique identifier used in conjunction with aria-describbedby */
  id: string;

  tx?: BoxStylingProps['tx'];

  /** Error text may always exist, but whether or not it's rendered can be controlled by other factors. */
  isErrorVisible: boolean;

  /** In Formik context, this is represented via meta.error */
  errorText?: string;
}

export const Error = ({ isErrorVisible, errorText, tx, ...restOfProps }: ErrorProps) => (
  <Text
    as="span"
    role="alert"
    variant="text-ui-12"
    aria-hidden={!errorText}
    tx={{
      position: 'absolute',
      bottom: -24,
      display: isErrorVisible ? 'block' : 'none',
      color: 'flamingo600',
      ...tx,
    }}
    {...restOfProps}
  >
    {capitalize(errorText)}
  </Text>
);
