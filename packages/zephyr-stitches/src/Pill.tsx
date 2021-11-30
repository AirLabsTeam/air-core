import { ElementRef, ReactNode, forwardRef } from 'react';
import * as StyledPill from './Pill.styles';

export type PillProps = StyledPill.RootProps & {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
};

export const Pill = forwardRef<ElementRef<typeof StyledPill.Root>, PillProps>(
  (
    {
      adornmentLeft,
      adornmentRight,
      appearance = 'filled',
      children,
      onClick,
      size = 'small',
      ...restOfProps
    }: PillProps,
    forwardedRef,
  ) => {
    return (
      <StyledPill.Root
        appearance={appearance}
        data-clickable={!!onClick ? '' : undefined}
        ref={forwardedRef}
        size={size}
        {...restOfProps}
      >
        {adornmentLeft && <StyledPill.Adornment side="left">{adornmentLeft}</StyledPill.Adornment>}

        {children}

        {adornmentRight && (
          <StyledPill.Adornment side="right">{adornmentRight}</StyledPill.Adornment>
        )}
      </StyledPill.Root>
    );
  },
);

Pill.displayName = 'Pill';

Pill.toString = () => StyledPill.Root.className;

export const PillAdornment = StyledPill.Adornment;
export const PillRoot = StyledPill.Root;
