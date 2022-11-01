import { forwardRefWithAs } from '@reach/utils';
import { variant as styledSystemVariant } from 'styled-system';
import { Ref } from 'react';
import { useTheme } from 'styled-components';
import { Tooltip, TooltipProps } from '../src/Tooltip';
import { Box } from './Box';
import { Button, ButtonProps, NonSemanticButtonProps } from './Button';
import { SVGComponent } from './shared';
import { VisuallyHidden } from './VisuallyHidden';

export interface NonSemanticIconButtonProps
  extends Omit<NonSemanticButtonProps, 'children' | 'adornmentLeft' | 'adornmentRight'> {
  /**
   * Unlike usual, this prop only accepts a string. It is also never visible. It represents an accessible label when the
   * button is not wrapped by a Tooltip. You may ask: "Why not name this prop better, and not use 'children'"?. Many
   * a11y-first libraries we consume like @reach-ui and @radix-ui have adopted this pattern of expecting required
   * accessibility text as a 'children' prop. When we use the polymorphic 'as' prop for things like MenuButton, 'children'
   * would be required.
   */
  children: string;
  icon: SVGComponent;
  /**
   * If you would like for the button to have its own tooltip, you can pass in the necessary props and the tooltip will be rendered immediately outside the IconButton, with the contents of this prop spread onto the Tooltip component.
   */
  tooltip?: Pick<TooltipProps, 'label' | 'side'> & Omit<TooltipProps, 'children'>;
  /**
   * When this prop is set to `false`, the assistive text is hidden. By default this is `true`. This should only be set to `false` when an iconButton has a parent element that already has a tooltip. In this case, assistive text is not required because a tooltip is present.
   */
  showAssistiveText?: boolean;
}

export interface IconButtonProps
  extends Omit<ButtonProps, 'children' | keyof NonSemanticButtonProps>,
    NonSemanticIconButtonProps {}

export const IconButton = forwardRefWithAs<NonSemanticIconButtonProps, 'button'>(
  (
    {
      as = 'button',
      children,
      className,
      disabled = false,
      tooltip,
      icon,
      isLoading = false,
      showAssistiveText = true,
      size = 'medium',
      tx,
      type = 'button',
      variant = 'button-filled-blue',
      ...restOfProps
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const theme = useTheme();
    const shouldShowAssistiveText = !tooltip && showAssistiveText;

    const iconButton = (
      <Button
        {...restOfProps}
        as={as}
        className={className}
        disabled={disabled}
        isLoading={isLoading}
        ref={ref}
        size={size}
        tx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          padding: 0,

          ...styledSystemVariant({
            prop: 'size',
            variants: {
              large: {
                width: 48,
                height: 48,
              },
              medium: {
                width: 40,
                height: 40,
              },
              small: {
                width: 32,
                height: 32,
              },
              ['extra-small']: {
                width: 24,
                height: 24,
              },
            },
          })({ theme, size, ...restOfProps }),

          ...tx,
        }}
        type={type}
        variant={variant}
      >
        {/* If button is wrapped with tooltip, it doesn't require assistive text. It's already provided on focus via the tooltip. */}
        {shouldShowAssistiveText && <VisuallyHidden>{children}</VisuallyHidden>}
        <Box
          as={icon}
          tx={{
            '& path': {
              strokeWidth: 2,
            },
            ...styledSystemVariant({
              prop: 'size',
              variants: {
                large: {
                  width: 24,
                },
                medium: {
                  width: 24,
                },
                small: {
                  width: 16,
                },
                ['extra-small']: {
                  width: 16,
                },
              },
            })({ theme, size, ...restOfProps }),
          }}
        />
      </Button>
    );

    return tooltip ? <Tooltip {...tooltip}>{iconButton}</Tooltip> : iconButton;
  },
);
