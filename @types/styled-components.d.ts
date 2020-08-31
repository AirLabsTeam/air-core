import 'styled-components';
import { CssFunctionReturnType } from '@styled-system/css';
import { ThemeObject } from '../packages/zephyr';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {}
}
