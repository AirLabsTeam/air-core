import { TXProp } from '..';

export type ModalVariantName = 'modal-small' | 'modal-medium' | 'modal-large';

const _modal: { [key in ModalVariantName]: TXProp } = {
  'modal-small': {
    width: '400px',
  },
  'modal-medium': {
    width: '496px',
  },
  'modal-large': {
    width: '600px',
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const modal = _modal as any;
