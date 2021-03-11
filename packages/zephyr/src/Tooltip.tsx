import React, { useMemo } from 'react';
import { PopperOwnProps, PopperArrowOwnProps } from '@radix-ui/react-popper';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Side } from '@radix-ui/utils';
import { Box } from './Box';
import { Text } from './Text';
import { TXProp } from './theme';
export interface TooltipProps
  extends Omit<PopperOwnProps, 'anchorRef' | 'sideOffset' | 'side'>,
    PopperArrowOwnProps {
  /**
   * Must be a real element to attach the tooltip to. This can either be a node, an element, or a component whose ref
   * is properly forwarded.
   */
  children: React.ReactElement;

  /** The actual tooltip content. */
  label: string;

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
  manualControlProps?: Required<RadixTooltip.TooltipOwnProps>;

  /**
   * Unfortunately, this component is prone to fighting the [z-index wars](https://joeist.com/2012/06/what-is-the-highest-possible-z-index-value/)
   * so we give you the power to control the underlying z-index number all of the primitives use in relation to eachother.
   */
  baseZIndex?: number;

  /**
   * Determines whether or not the tooltip has a white border around it. Useful for rendering a tooltip that visually
   * spans across multiple, differently colored backgrounds.
   */
  withBorder?: boolean;

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
  avoidCollisions,
  baseZIndex = 10,
  children,
  collisionTolerance,
  label,
  manualControlProps,
  offset = 10,
  side,
  sideOffset = 10,
  withBorder = true,
  'data-testid': testID,
}: TooltipProps) => {
  const Trigger = useMemo(() => {
    const component = React.forwardRef((props, forwardedRef) =>
      React.cloneElement(React.Children.only(children), {
        ...props,
        ref: forwardedRef,
      }),
    );

    component.displayName = 'TooltipTrigger';

    return component;
  }, [children]);

  return (
    <RadixTooltip.Root {...manualControlProps}>
      <RadixTooltip.Trigger as={Trigger} />

      <Box
        as={RadixTooltip.Content}
        side={side}
        aria-label={ariaLabel}
        data-testid={testID}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionTolerance={collisionTolerance}
        avoidCollisions={avoidCollisions}
        tx={{
          bg: 'black',
          color: 'white',
          px: 10,
          py: 5,
          height: 36,
          borderColor: withBorder ? 'white' : 'transparent',
          borderWidth: 2,
          borderStyle: 'solid',
          borderRadius: 4,
          zIndex: baseZIndex + 1,
        }}
      >
        <Text variant="text-ui-14" tx={{ color: 'currentColor' }}>
          {label}
        </Text>

        {withBorder && (
          <Box
            as={RadixTooltip.Arrow}
            tx={{
              fill: 'white',
              zIndex: baseZIndex,
              strokeLinejoin: 'round',
              strokeLinecap: 'round',
              stroke: 'white',
              strokeWidth: 1,
              ...triangleOffsetMapping['border'][side],
            }}
            width={12}
            height={8}
            offset={offset}
          />
        )}
        <Box
          as={RadixTooltip.Arrow}
          tx={{
            zIndex: baseZIndex + 1,
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
            stroke: 'black',
            strokeWidth: 1,
            ...triangleOffsetMapping['base'][side],
          }}
          width={10}
          height={7}
          offset={offset}
        />
      </Box>
    </RadixTooltip.Root>
  );
};
