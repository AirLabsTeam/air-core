export type TextVariantName =
  | 'heading-72'
  | 'heading-64'
  | 'heading-56'
  | 'heading-48'
  | 'heading-40'
  | 'heading-32'
  | 'heading-24'
  | 'heading-20'
  | 'heading-18'
  | 'heading-16'
  | 'ui-36'
  | 'ui-32'
  | 'ui-24'
  | 'ui-20'
  | 'ui-18'
  | 'ui-16'
  | 'ui-14'
  | 'ui-12'
  | 'ui-10';

export const text: { [key in TextVariantName]: {} } = {
  'heading-72': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 72,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'heading-64': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 64,
    fontWeight: 'medium',
    letterSpacing: '0.02em',
    lineHeight: 1.1,
  },
  'heading-56': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 56,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.16,
  },
  'heading-48': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 48,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.16,
  },
  'heading-40': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 40,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.15,
  },
  'heading-32': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 32,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'heading-24': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 24,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'heading-20': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 20,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'heading-18': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 18,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'heading-16': {
    fontFamily: 'display',
    fontFeatureSettings: `'ss03' on, 'ss02' on`,
    fontSize: 16,
    fontWeight: 'medium',
    letterSpacing: '0.03em',
    lineHeight: 1.1,
  },
  'ui-36': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 36,
    lineHeight: 1.5,
  },
  'ui-32': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 32,
    lineHeight: 1.5,
    letterSpacing: '0.001em',
  },
  'ui-24': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 24,
    lineHeight: 1.2,
  },
  'ui-20': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 20,
    lineHeight: 1.5,
    letterSpacing: '-0.03em',
  },
  'ui-18': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: '-0.024em',
  },
  'ui-16': {
    fontFamily: 'copy',
    fontFeatureSettings: `'case' on`,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
  },
  'ui-14': {
    fontFamily: 'copy',
    fontSize: 14,
    letterSpacing: '-0.015em',
    lineHeight: 1.5,
  },
  'ui-12': {
    fontFamily: 'copy',
    fontSize: 12,
    lineHeight: 1.5,
  },
  'ui-10': {
    fontFamily: 'copy',
    fontSize: 10,
    lineHeight: '12px',
  },
};
