import React, { MouseEvent as ReactMouseEvent, ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick'> {
  isDisabled?: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...{
        ...props,
        disabled: props.isDisabled,
        style: { ...props.style, padding: '1rem 0.5rem', backgroundColor: '#FAFAFA' },
        type: props.type ?? 'button',
      }}
    />
  );
};
