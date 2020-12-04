import { button } from './button';
import { field } from './field';
import { modal } from './modal';
import { text } from './text';

export const variants = {
  ...button,
  ...field,
  ...modal,
  ...text,
};

export * from './button';
export * from './field';
export * from './modal';
export * from './text';
