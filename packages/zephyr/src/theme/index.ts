import { CSSProperties } from 'react';
import {
  ColorProps,
  ResponsiveValue,
  SpaceProps,
  TypographyProps,
  Theme as StyledSystemTheme,
} from 'styled-system';

import { colors } from './colors';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { radii } from './radii';
import { space } from './space';
import { variants } from './variants';

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
  variants,
};

export * from './colors';
export * from './fonts';
export * from './fontSizes';
export * from './fontWeights';
export * from './radii';
export * from './space';
export * from './variants';

export type Theme = typeof theme;

/**
 * Our theme, but "variants" is stripped out since we don't want it defined in the "tx" prop.
 * @see https://styled-system.com/theme-specification
 */
export type ThemeWithoutVariants = Omit<Theme, 'variants'>;

// Used as a catch-all for using styled-system's responsive styling paradigm on CSS properties with no ties to our theme.
type ResponsiveValues = ResponsiveValue<string | number, ThemeWithoutVariants>;

// styled-system lets you define these in your theme spec, but we don't.
type UnusedStyledSystemThemeKeys = {
  breakpoints: string[];
  lineHeights: number[];
  letterSpacings: (string | number)[];
  borders: string[];
  borderStyles: string[];
  borderWidths: (string | number)[];
  zIndices: number[];
};

// The types for styled-system requires types to be defined for every key in the spec though.
type TypeSafeStyledSystemTheme = ThemeWithoutVariants & UnusedStyledSystemThemeKeys;

interface StyledSystemProps
  extends ColorProps<TypeSafeStyledSystemTheme>,
    SpaceProps<TypeSafeStyledSystemTheme>,
    TypographyProps<TypeSafeStyledSystemTheme> {}

/**
 * The theme prop. You'll be provided with intellisense for theme-relevant values, documentation for every CSS selector,
 * and bare-minimum typesafety. Think of it as a theme-aware CSS and styled-system props, but in an object.
 */
export type TXProp =
  | (StyledSystemProps & Omit<CSSProperties, keyof StyledSystemProps>)
  | {
      /** Typically meant for CSS keys where we have no prescribed theme values or pseudoselectors */
      [whateverTheHellYouWant: string]:
        | TXProp
        | ResponsiveValues
        | ((_theme: StyledSystemTheme) => ResponsiveValues);
    };
