import css, { get } from '@styled-system/css';
import React from 'react';
import styled from 'styled-components';

import { SXProp, TXProp } from './theme';

type BoxVariantProps = {
  variant?: string | string[];
  __themeKey?: string;
};

type BoxInlineStyleProps = {
  /** @description The `sx` prop lets you define inline style using the theme value. This prop __does not__ check against the theme object and will be spread into the style objects and will overwrite the `tx` prop values. */
  sx?: SXProp;
  /** @description The `tx` prop lets you style elements inline using the theme values. This prop type checks against the theme object. */
  tx?: TXProp;
};

type Attributes<TElement = HTMLDivElement> = TElement extends
  | SVGElement
  | SVGSVGElement
  | SVGPathElement
  ? React.SVGProps<TElement>
  : React.HTMLProps<TElement>;

interface ProtectedStylings {
  /** @description Used to define base styles for the component. These cannot/will not be overridden by `sx` or `tx`. */
  __baseStyles?: SXProp;
}

export type BoxProps<TElement = HTMLDivElement> = Omit<Attributes<TElement>, 'as' | 'key'> &
  BoxVariantProps &
  BoxInlineStyleProps &
  ProtectedStylings & {
    as?:
      | keyof JSX.IntrinsicElements
      | React.ComponentType<any>
      | React.ForwardRefExoticComponent<any>;
  };

const inlineStyles = ({ sx, tx, theme }: BoxInlineStyleProps & { theme: any }) =>
  css({ ...tx, ...sx })(theme);

/** @description `__baseStyles` are spread into each style object so that they cannot be overridden. */
const baseStyles = (props: BoxProps & { theme: any }) => css(props.__baseStyles)(props.theme);

const variant = ({ theme, variant = '', __themeKey = '' }: BoxVariantProps & { theme: any }) => {
  return css(get(theme, __themeKey + '.' + variant, get(theme, variant)))(theme);
};

export const Box = styled('div')<BoxProps>(
  {
    minWidth: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  baseStyles,
  variant,
  inlineStyles,
  (props) => props.css,
);
