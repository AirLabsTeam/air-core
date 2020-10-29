import {
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import * as CSS from 'csstype';

import { colors } from './colors';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { radii } from './radii';
import { space } from './space';

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
};

/** @description Gets the theme object */
export type ThemeObject = typeof theme;

/** @description Omits custom theme keys */
export type ThemeWithoutCustomKeys = Omit<ThemeObject, 'variants'>;

/** @description Styled-system props without custom theme keys */
export interface StyledSystemProps
  extends BorderProps<ThemeWithoutCustomKeys>,
    BorderRadiusProps<ThemeWithoutCustomKeys>,
    ColorProps<ThemeWithoutCustomKeys>,
    SpaceProps<ThemeWithoutCustomKeys>,
    TypographyProps<ThemeWithoutCustomKeys> {}

/** @description TXProp checks against only the theme object */
export type TXProp =
  | (StyledSystemProps & Omit<CSS.StandardLonghandProperties, keyof StyledSystemProps>)
  | {
      /** Typically meant for CSS keys where we have no prescribed theme values or pseudoselectors */
      [whateverTheHellYouWant: string]:
        | TXProp
        | string
        | number
        | (string | number)[]
        | ((_theme: ThemeObject) => string | number | (string | number)[]);
    };
