import 'styled-components';
import { Theme } from '../packages/zephyr/src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
