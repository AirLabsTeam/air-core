import { TXProp } from '..';

export type TextVariantName =
  | 'text-heading-80'
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
  | 'text-ui-48'
  | 'text-ui-40'
  | 'text-ui-36'
  | 'text-ui-32'
  | 'text-ui-24'
  | 'text-ui-20'
  | 'text-ui-18'
  | 'text-ui-16'
  | 'text-ui-16-uppercase'
  | 'text-ui-14'
  | 'text-ui-14-uppercase'
  | 'text-ui-12'
  | 'text-ui-12-uppercase'
  | 'text-ui-10'
  | 'text-ui-10-uppercase';

const _text: { [key in TextVariantName]: TXProp } = {
  'text-heading-80': {
    fontFamily: 'display',
    // fontFeatureSettings are for an alternate character set available to the Gelica font
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 80,
    fontWeight: 'medium',
    letterSpacing: '0.02em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-72': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 72,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-64': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 64,
    fontWeight: 'medium',
    letterSpacing: '0.02em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-56': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 56,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.16,
    textTransform: 'none',
  },
  'text-heading-48': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 48,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.16,
    textTransform: 'none',
  },
  'text-heading-40': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 40,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.15,
    textTransform: 'none',
  },
  'text-heading-32': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 32,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-24': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 24,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-20': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 20,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-18': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 18,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-heading-16': {
    fontFamily: 'display',
    fontFeatureSettings: `'salt' on, 'ss01' on`,
    fontSize: 16,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
    textTransform: 'none',
  },
  'text-ui-48': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 48,
    letterSpacing: '-0.022em',
    lineHeight: 1.2,
    textTransform: 'none',
  },
  'text-ui-40': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 40,
    letterSpacing: '-0.022em',
    lineHeight: 1.2,
    textTransform: 'none',
  },
  'text-ui-36': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 36,
    letterSpacing: '-0.022em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  'text-ui-32': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 32,
    lineHeight: 1.2,
    letterSpacing: '-0.021em',
    textTransform: 'none',
  },
  'text-ui-24': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 24,
    letterSpacing: '-0.0019em',
    lineHeight: 1.2,
    textTransform: 'none',
  },
  'text-ui-20': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 20,
    letterSpacing: '-0.017em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  'text-ui-18': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 18,
    letterSpacing: '-0.014em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  'text-ui-16': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 16,
    letterSpacing: '-0.011em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  'text-ui-16-uppercase': {
    fontFamily: 'copy',
    fontFeatureSettings: `'pnum' on, 'lnum' on, 'ss01' on`,
    fontSize: 16,
    letterSpacing: '0.1em',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },
  'text-ui-14': {
    fontFamily: 'copy',
    fontFeatureSettings: 'normal',
    fontSize: 14,
    letterSpacing: '-0.006em',
    lineHeight: '20px',
    textTransform: 'none',
  },
  'text-ui-14-uppercase': {
    fontFamily: 'copy',
    fontFeatureSettings: `'cpsp' on, 'case' on`,
    fontSize: 14,
    letterSpacing: '0.04em',
    lineHeight: '20px',
    textTransform: 'uppercase',
  },
  'text-ui-12': {
    fontFamily: 'copy',
    fontFeatureSettings: 'normal',
    fontSize: 12,
    letterSpacing: 'normal',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  'text-ui-12-uppercase': {
    fontFamily: 'copy',
    fontFeatureSettings: `'pnum' on, 'lnum' on, 'ss01' on`,
    fontSize: 12,
    letterSpacing: '0.03em',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },
  'text-ui-10': {
    fontFamily: 'copy',
    fontFeatureSettings: 'normal',
    fontSize: 10,
    letterSpacing: '0.01em',
    lineHeight: '12px',
    textTransform: 'none',
  },
  'text-ui-10-uppercase': {
    fontFamily: 'copy',
    fontFeatureSettings: `'pnum' on, 'lnum' on, 'ss01' on`,
    fontSize: 10,
    letterSpacing: '0.04em',
    lineHeight: '12px',
    textTransform: 'uppercase',
  },
};

// cast as any to avoid circular reference to theme via TXProp
export const text = _text as any;
