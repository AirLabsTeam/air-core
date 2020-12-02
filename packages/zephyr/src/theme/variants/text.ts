import { TXProp } from '..';

export type TextVariantName =
  | 'text-heading-72'
  | 'text-heading-64'
  | 'text-heading-56'
  | 'text-heading-48'
  | 'text-heading-40'
  | 'text-heading-32'
  | 'text-heading-24'
  | 'text-heading-20'
  | 'text-heading-18'
  | 'text-heading-16'
  | 'text-ui-36'
  | 'text-ui-32'
  | 'text-ui-24'
  | 'text-ui-20'
  | 'text-ui-18'
  | 'text-ui-16'
  | 'text-ui-14'
  | 'text-ui-12'
  | 'text-ui-10'
  | 'text-error-12';

const _text: { [key in TextVariantName]: TXProp } = {
  'text-heading-72': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 72,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'text-heading-64': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 64,
    fontWeight: 'medium',
    letterSpacing: '0.02em',
    lineHeight: 1.1,
  },
  'text-heading-56': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 56,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.16,
  },
  'text-heading-48': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 48,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.16,
  },
  'text-heading-40': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 40,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.15,
  },
  'text-heading-32': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 32,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'text-heading-24': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 24,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'text-heading-20': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 20,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'text-heading-18': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 18,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'text-heading-16': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 16,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'text-ui-36': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 36,
    lineHeight: 1.5,
  },
  'text-ui-32': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 32,
    lineHeight: 1.5,
    letterSpacing: '0.001em',
  },
  'text-ui-24': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 24,
    lineHeight: 1.2,
  },
  'text-ui-20': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 20,
    lineHeight: 1.5,
    letterSpacing: '-0.03em',
  },
  'text-ui-18': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: '-0.024em',
  },
  'text-ui-16': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
  },
  'text-ui-14': {
    fontFamily: 'copy',
    fontSize: 14,
    letterSpacing: '-0.015em',
    lineHeight: 1.5,
  },
  'text-ui-12': {
    fontFamily: 'copy',
    fontSize: 12,
    lineHeight: 1.5,
  },
  'text-ui-10': {
    fontFamily: 'copy',
    fontSize: 10,
    lineHeight: '12px',
  },
  'text-error-12': {
    fontFamily: 'copy',
    fontSize: 12,
    fontWeight: 'semibold',
    lineHeight: 1.5,
    color: 'flamingo600',
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const text = _text as any;
