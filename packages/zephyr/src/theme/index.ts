import { SystemStyleObject } from '@styled-system/css';
import {
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  ColorProps,
  SpaceProps,
  TypographyProps,
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

/** @description Gets the theme object */
export type ThemeObject = typeof theme;

/** @description Omits custom theme keys */
export type ThemeWithoutCustomKeys = Omit<ThemeObject, 'variants'>;

/** @description Styled-system props without custom theme keys */
export type StyledSystemProps =
  | BorderProps<ThemeWithoutCustomKeys>
  | BorderRadiusProps<ThemeWithoutCustomKeys>
  | BoxShadowProps<ThemeWithoutCustomKeys>
  | ColorProps<ThemeWithoutCustomKeys>
  | SpaceProps<ThemeWithoutCustomKeys>
  | TypographyProps<ThemeWithoutCustomKeys>;

export type TXProp = Omit<SystemStyleObject, keyof StyledSystemProps> & StyledSystemProps;

export type SXProp = TXProp | SystemStyleObject;
