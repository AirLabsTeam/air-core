import { ReactElement, ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Side, Align } from '@radix-ui/popper';
import { Box } from './Box';
import { Text } from './Text';
import { TXProp } from './theme';

/**
 * This type is necessary, but it is not exported from @radix-ui/react-popper, so we duplicate it
 */
type PopperContentProps = {
  align?: Align;
  alignOffset?: number;
  collisionTolerance?: number;
  avoidCollisions?: boolean;
};

export interface TooltipProps extends PopperContentProps {
  children: ReactElement;
  /** The actual tooltip content. */
  label: ReactNode;

  /** Represents where the tooltip renders in relation to the wrapped component/element. */
  side: Side;

  /**
   * The amount of pixels away the tooltip renders from the wrapped element's rect.
   */
  sideOffset?: number;

  /**
   * Sometimes the item with wrapped by a tooltip contains information that is relevant to the user, like a badge showing
   * the count for notifications. In these cases we want the screen reader user to know not only the content in the
   * tooltip, but also the content in the badge. For screen reader users, the only content announced to them is whatever
   * is in the tooltip. For these cases, use the aria-label prop to sum both contents concisely.
   */
  ariaLabel?: string;

  /**
   * See [this documentation](https://radix-ui.com/primitives/docs/components/tooltip#root) for a more detailed
   * explanation. When defined, we're assuming that you're in total control of the rendering of the component. If
   * undefined, we'll render the tooltip on hover and on focus (if the element is focusable).
   */
  manualControlProps?: Required<
    Pick<RadixTooltip.TooltipProps, 'open' | 'defaultOpen' | 'onOpenChange'>
  > &
    Pick<RadixTooltip.TooltipProps, 'delayDuration'>;

  /**
   * This prop can be used to pass custom styles to specific portions of the rendered tooltip. You can pass styles
   * to the tx prop as normal, and the styles will be applied to the div containing the entire tooltip. However if you’d like
   * to style a specific portion, there are 3 optional properties that you may use to style that section of the Tooltip. You should use`TooltipArrow` for
   * specific arrow styles, `tooltipBorder` for the Tooltip's border styles, and the `TooltipContentBox` for the styles
   * to be applied to the immediate div surrounding the label. Please note these styles do not override existing props.
   */
  tx?: TXProp & {
    TooltipArrow?: TXProp;
    TooltipContent?: TXProp;
  };

  /**
   * Unfortunately, this component is prone to fighting the [z-index wars](https://joeist.com/2012/06/what-is-the-highest-possible-z-index-value/)
   * so we give you the power to control the underlying z-index number all of the primitives use in relation to eachother.
   */
  baseZIndex?: number;

  /**
   * This determines whether or not the arrow shows on the tooltip
   * @default true
   */
  withArrow?: boolean;

  /**
   * The distance in pixels to render the Tooltip.Arrow from the Tooltip.Content edge if it is pushed to the edge.
   * @default 10
   */
  arrowOffset?: number;

  'data-testid'?: string;
}

/**
 * Some annoying styles needed to position the white (border) triangle underneath the black triangle correctly on top
 * of the trigger element (and over its border too).
 */
const triangleOffsetMapping: {
  [key in 'base' | 'border']: { [key in Side]: TXProp | undefined };
} = {
  border: {
    top: undefined,
    right: {
      ml: -1,
    },
    bottom: undefined,
    left: {
      mr: -1,
    },
  },
  base: {
    top: {
      ml: 1,
      mt: -2,
    },
    right: {
      mt: -2,
    },
    bottom: {
      mr: 1,
      mt: -2,
    },
    left: {
      mt: -2,
    },
  },
};

/**
 * Using [Radix UI's Tooltip](https://radix-ui.com/primitives/docs/components/tooltip). There's a small global delay that
 * elapses when hovering over any item with a tooltip. The tooltip renders after the delay elapses, but renders
 * immediately when traversing other elements with a toolip UNLESS the global timer elapses when NOT hovering over an item
 * with a tooltip. This essentially follows common practices leveraged in operating systems.
 *
 * Keep in mind [these caveats from ReachUI](https://reach.tech/tooltip) when deciding whether or not to use tooltips:
 *
 * - Do not use tooltips for information vital to task completion. The elements they are attached to should usually make
 * sense on their own, but a tooltip can help provide a little bit more information, especially for new users of your app.
 *
 * - Keep the content minimal, they are not intended to hide critical content.
 *
 * - If you want interactive content, you can use a Dialog (Modal) or a Popover.
 */
export const Tooltip = ({
  align,
  alignOffset,
  ariaLabel,
  arrowOffset = 10,
  avoidCollisions,
  baseZIndex = 10,
  children,
  label,
  manualControlProps,
  side,
  sideOffset = 10,
  tx = {},
  withArrow = true,
  'data-testid': testID,
}: TooltipProps) => {
  const { TooltipArrow: arrowStyles, TooltipContent: textContentStyles, ...containerStyles } = tx;

  return (
    <RadixTooltip.Root delayDuration={500} {...manualControlProps}>
      {/**
       * asChild renders the resulting Trigger as a fragment instead of a button
       *  */}
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          avoidCollisions={avoidCollisions}
        >
          <Box
            aria-label={ariaLabel}
            data-testid={testID}
            tx={{
              bg: 'black',
              color: 'white',
              px: 10,
              py: 5,
              minHeight: 36,
              borderColor: 'transparent',
              borderWidth: 2,
              borderStyle: 'solid',
              borderRadius: 4,
              zIndex: baseZIndex + 1,
              ...(containerStyles as any),
            }}
          >
            <Text
              variant="text-ui-14"
              tx={{
                color: 'currentColor',
                fontWeight: 'medium',
                ...(textContentStyles as any),
              }}
            >
              {label}
            </Text>

            {withArrow && (
              <RadixTooltip.Arrow width={10} height={7} offset={arrowOffset}>
                <Box
                  tx={{
                    zIndex: baseZIndex + 1,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                    stroke: 'black',
                    strokeWidth: 1,
                    ...triangleOffsetMapping['base'][side],
                    ...(arrowStyles as any),
                  }}
                />
              </RadixTooltip.Arrow>
            )}
          </Box>
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

export const TooltipProvider = RadixTooltip.Provider;
