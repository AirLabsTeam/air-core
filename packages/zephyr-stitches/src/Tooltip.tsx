import { ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { Text } from './Text';
import * as StyledTooltip from './Tooltip.styles';

export type TooltipProps = Pick<
  RadixTooltip.TooltipContentProps,
  | 'align'
  | 'alignOffset'
  | 'aria-label'
  | 'avoidCollisions'
  | 'collisionTolerance'
  | 'side'
  | 'sideOffset'
> &
  Pick<
    RadixTooltip.TooltipProps,
    'defaultOpen' | 'delayDuration' | 'open' | 'onOpenChange' | 'skipDelayDuration'
  > & {
    ['data-testid']?: string;
    children: ReactNode;
    hasArrow?: boolean;
    label: string;
  };

export const Tooltip = ({
  align = 'center',
  alignOffset = 0,
  ['aria-label']: ariaLabel,
  avoidCollisions = true,
  collisionTolerance = 0,
  children,
  ['data-testid']: testId,
  defaultOpen,
  delayDuration,
  hasArrow = true,
  label,
  open,
  onOpenChange,
  side,
  sideOffset = 8,
  skipDelayDuration,
}: TooltipProps) => {
  return (
    <RadixTooltip.Root
      defaultOpen={defaultOpen}
      delayDuration={delayDuration}
      open={open}
      onOpenChange={onOpenChange}
      skipDelayDuration={skipDelayDuration}
    >
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <StyledTooltip.Content
        aria-label={ariaLabel}
        data-testid={testId}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        collisionTolerance={collisionTolerance}
        side={side}
        sideOffset={sideOffset}
      >
        <Text size="ui-14">{label}</Text>
        {hasArrow && <StyledTooltip.Arrow />}
      </StyledTooltip.Content>
    </RadixTooltip.Root>
  );
};

Tooltip.toString = () => StyledTooltip.Content.className;

export const TooltipArrow = StyledTooltip.Arrow;
export const TooltipContent = StyledTooltip.Content;
