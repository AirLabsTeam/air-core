import 'styled-components';
import { ThemeObject } from '../packages/zephyr';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {}
}
