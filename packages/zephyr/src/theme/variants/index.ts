import { button } from './button';
import { buttonLink } from './button-link';
import { field } from './field';
import { modal } from './modal';
import { text } from './text';

export const variants = {
  ...button,
  ...buttonLink,
  ...field,
  ...modal,
  ...text,
};

export * from './button';
export * from './button-link';
export * from './field';
export * from './modal';
export * from './text';
