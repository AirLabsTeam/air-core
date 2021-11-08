import * as StyledPill from './Pill.styles';

export type PillProps = StyledPill.RootProps & {};

export const Pill = ({
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
      {children}
    </StyledPill.Root>
  );
};
