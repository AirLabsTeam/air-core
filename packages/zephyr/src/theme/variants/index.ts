import { button } from './button';
import { modal } from './modal';
import { text } from './text';

export const variants = {
  ...button,
  ...modal,
  ...text,
};

export * from './button';
export * from './modal';
export * from './text';
