import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';
import * as CSS from 'csstype';

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

/** @description Gets the theme object */
export type ThemeObject = typeof theme;

/** @description Omits custom theme keys */
export type ThemeWithoutCustomKeys = Omit<ThemeObject, 'variants'>;

/** @description Styled-system props without custom theme keys */
export interface StyledSystemProps
  extends ColorProps<ThemeWithoutCustomKeys>,
    SpaceProps<ThemeWithoutCustomKeys>,
    TypographyProps<ThemeWithoutCustomKeys> {}

export type TXProp =
  | (StyledSystemProps & Omit<CSS.StandardLonghandProperties, keyof StyledSystemProps>)
  | {
      /** Typically meant for CSS keys where we have no prescribed theme values or pseudoselectors */
      [whateverTheHellYouWant: string]: TXProp | string | number | (string | number)[];
    };
