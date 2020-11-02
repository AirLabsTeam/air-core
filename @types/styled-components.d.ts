import 'styled-components';
import { CssFunctionReturnType } from '@styled-system/css';
import { ThemeObject } from '../packages/zephyr/src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {}
}

declare module 'react' {
  interface Attributes {
    /** @description use @styled-system/css */
    css?: CssFunctionReturnType;
  }
}
