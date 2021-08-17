/**
 * The logic in this file was obtained from `@reach/popover` and modify to support an `offset`.
 * @see https://github.com/reach/reach-ui/blob/main/packages/popover/src/index.tsx#L117-L144
 */
import { PRect } from '@reach/rect';
import { CSSProperties } from 'react';

function getCollisions(
  targetRect: PRect,
  popoverRect: PRect,
  offsetLeft: number = 0,
  offsetBottom: number = 0,
) {
  const collisions = {
    top: targetRect.top - popoverRect.height < 0,
    right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
    bottom: window.innerHeight < targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left + targetRect.width - popoverRect.width < 0,
  };

  return {
    isDirectionRight: collisions.right && !collisions.left,
    isDirectionLeft: collisions.left && !collisions.right,
    isDirectionUp: collisions.bottom && !collisions.top,
    isDirectionDown: collisions.top && !collisions.bottom,
  };
}

function getTopPosition(
  targetRect: PRect,
  popoverRect: PRect,
  isDirectionUp: boolean,
  offset: number = 0,
) {
  return {
    top: isDirectionUp
      ? `${targetRect.top - popoverRect.height + window.pageYOffset - offset}px`
      : `${targetRect.top + targetRect.height + window.pageYOffset + offset}px`,
  };
}
export const getPosition = (
  targetRect?: PRect | null,
  popoverRect?: PRect | null,
  offset?: number,
) => {
  if (!targetRect || !popoverRect) {
    return {};
  }

  const { isDirectionRight, isDirectionUp } = getCollisions(targetRect, popoverRect);

  return {
    left: isDirectionRight
      ? `${targetRect.right - popoverRect.width + window.pageXOffset}px`
      : `${targetRect.left + window.pageXOffset}px`,
    ...getTopPosition(targetRect, popoverRect, isDirectionUp, offset),
  } as CSSProperties;
};
