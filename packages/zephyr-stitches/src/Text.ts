import { ComponentProps } from 'react';
import { CSS, styled, VariantProps } from './stitches.config';

export const TEXT_ELEMENT_TAG = 'div';

export type TextVariants = VariantProps<typeof Text>;

export type TextProps = ComponentProps<typeof Text> &
  TextVariants & {
    css?: CSS;
  };

export const Text = styled(TEXT_ELEMENT_TAG, {
  minWidth: 0,
  margin: 0,
  fontFamily: '$copy',
  boxSizing: 'border-box',

  variants: {
    size: {
      'heading-80': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 80,
        fontWeight: 600,
        letterSpacing: '0.02em',
        lineHeight: 1.1,
      },
      'heading-72': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 72,
        fontWeight: 600,
        letterSpacing: '0.02em',
        lineHeight: 1.1,
      },
      'heading-64': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 64,
        fontWeight: 600,
        letterSpacing: '0.02em',
        lineHeight: 1.1,
      },
      'heading-56': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 56,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.16,
      },
      'heading-48': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 48,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.16,
      },
      'heading-40': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 40,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.15,
      },
      'heading-32': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 32,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.1,
      },
      'heading-24': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.1,
      },
      'heading-20': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.1,
      },
      'heading-18': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.1,
      },
      'heading-16': {
        fontFamily: '$display',
        fontFeatureSettings: `'salt' on, 'ss01' on`,
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '0.03em',
        lineHeight: 1.1,
      },
      'ui-10': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.2,
      },
      'ui-12': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: 'initial',
        lineHeight: 1.5,
      },
      'ui-14': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: '-0.006em',
        lineHeight: '20px',
      },
      'ui-16': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: '-0.011em',
        lineHeight: 1.5,
      },
      'ui-18': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 18,
        fontWeight: 400,
        letterSpacing: '-0.014em',
        lineHeight: '24px',
      },
      'ui-20': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 20,
        fontWeight: 400,
        letterSpacing: '-0.017em',
        lineHeight: 1.3,
      },
      'ui-24': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 24,
        fontWeight: 400,
        letterSpacing: '-0.019em',
        lineHeight: 1.2,
      },
      'ui-32': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 32,
        fontWeight: 400,
        letterSpacing: '-0.021em',
        lineHeight: 1.2,
      },
      'ui-36': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 36,
        fontWeight: 400,
        letterSpacing: '-0.022em',
        lineHeight: 1.2,
      },
      'ui-40': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: '-0.022em',
        lineHeight: 1.2,
      },
      'ui-48': {
        fontFamily: '$copy',
        fontFeatureSettings: `'case' on`,
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: '-0.022em',
        lineHeight: 1.2,
      },
      inherit: {
        fontFamily: 'inherit',
        fontFeatureSettings: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
      },
    },
    transform: {
      none: {
        textTransform: 'none',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
    },
  },

  compoundVariants: [
    {
      size: 'ui-10',
      transform: 'uppercase',
      css: {
        fontFeatureSettings: `'pnum' on, 'lnum' on, 'ss01' on`,
        fontWeight: 600,
        letterSpacing: '0.04em',
      },
    },
    {
      size: 'ui-12',
      transform: 'uppercase',
      css: {
        fontFeatureSettings: `'pnum' on, 'lnum' on, 'ss01' on`,
        fontWeight: 600,
        letterSpacing: '0.03em',
      },
    },
    {
      size: 'ui-14',
      transform: 'uppercase',
      css: {
        fontFeatureSettings: `'cpsp' on, 'case' on`,
        fontWeight: 600,
        letterSpacing: '0.04em',
      },
    },
    {
      size: 'ui-16',
      transform: 'uppercase',
      css: {
        fontFeatureSettings: `'case' on`,
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
    },
  ],

  defaultVariants: {
    size: 'ui-16',
    transform: 'none',
  },
});
