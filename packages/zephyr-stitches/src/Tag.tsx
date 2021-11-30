import { ReactNode } from 'react';
import * as StyledTag from './Tag.styles';

export const TEXT_SIZE_MAP = {
  small: 'ui-12',
  medium: 'ui-14',
  large: 'ui-16',
};

export type TagProps = StyledTag.RootProps & {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
};

export const Tag = ({
  adornmentLeft,
  adornmentRight,
  children,
  color = 'grey',
  onClick,
  size = 'small',
  ...restOfProps
}: TagProps) => {
  return (
    <StyledTag.Root
      color={color}
      data-clickable={!!onClick ? '' : undefined}
      onClick={onClick}
      size={size}
      {...restOfProps}
    >
      {adornmentLeft && (
        <StyledTag.Adornment side="left" size={size}>
          {adornmentLeft}
        </StyledTag.Adornment>
      )}

      {children}

      {adornmentRight && (
        <StyledTag.Adornment side="right" size={size}>
          {adornmentRight}
        </StyledTag.Adornment>
      )}
    </StyledTag.Root>
  );
};
