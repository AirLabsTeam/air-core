import React, { MouseEvent as ReactMouseEvent, ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'children' | 'onClick'> {
  isDisabled?: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  return <button {...{ ...props, disabled: props.isDisabled }} />;
};
