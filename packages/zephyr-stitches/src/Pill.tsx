import { ReactNode } from 'react';
import * as StyledPill from './Pill.styles';

export type PillProps = StyledPill.RootProps & {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
};

export const Pill = ({
  adornmentLeft,
  adornmentRight,
  appearance = 'filled',
  children,
  onClick,
  size = 'small',
  ...restOfProps
}: PillProps) => {
  return (
    <StyledPill.Root
      appearance={appearance}
      data-clickable={!!onClick ? '' : undefined}
      size={size}
      {...restOfProps}
    >
      {adornmentLeft && <StyledPill.Adornment side="left">{adornmentLeft}</StyledPill.Adornment>}

      {children}

      {adornmentRight && <StyledPill.Adornment side="right">{adornmentRight}</StyledPill.Adornment>}
    </StyledPill.Root>
  );
};
