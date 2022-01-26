import { As, PropsWithAs } from '@reach/utils';
import { color, compose, space, variant } from 'styled-system';
import css, { get } from '@styled-system/css';
import styled from 'styled-components';
import { Theme, TXProp } from './theme';

export type BoxStylingProps = {
  /**
   * The `tx` prop is essentially styled-system + every remaining CSS property within an object. This resolves one
   * drawback with styled-system... We can now leverage selectors and pseudoselectors, and we can use them with
   * responsive values. If you need to access a theme value (like for polished methods), use a `useTheme` hook.
   */
  tx?: TXProp;

  /**
   * This is used to place a component's potential `variant` usage in the correct object.
   * TODO: Suggest removing this and flattening variants object using long key names
   */
  __themeKey?: string;

  /**
   * Used to apply predefined styles.
   * TODO: Define merging behavior for tx and __baseStyles.
   */
  variant?: string | string[];
};

export type BoxProps<TDefaultElement extends As = 'div'> = PropsWithAs<
  TDefaultElement,
  BoxStylingProps
>;

const inlineStyles = ({ tx, theme }: any) => css({ ...tx })(theme);

const baseStyles = (props: any) => css(props.__baseStyles)(props.theme);

const variants = ({
  theme,
  __themeKey = 'variants',
  ...restOfProps
}: BoxStylingProps & { theme: Theme }) =>
  variant({
    prop: 'variant',
    scale: __themeKey,
    variants: get(theme, __themeKey),
  })({ theme, ...restOfProps });

export const Box = styled('div')<BoxStylingProps>(
  {
    minWidth: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  baseStyles,
  variants,
  inlineStyles,
  compose(color, space),
);
