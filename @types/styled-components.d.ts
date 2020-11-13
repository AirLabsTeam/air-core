import 'styled-components';
import { CssFunctionReturnType } from '@styled-system/css';
import { Theme } from '../packages/zephyr/src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    /** @description use @styled-system/css */
    css?: CssFunctionReturnType;
  }
}
