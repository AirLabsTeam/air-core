import {
  canaries,
  cockatoos,
  cuckoos,
  flamingos,
  jays,
  macaws,
  parrots,
  peacocks,
  pigeons,
  robins,
} from '@air/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      ...canaries,
      ...cockatoos,
      ...cuckoos,
      ...flamingos,
      ...jays,
      ...macaws,
      ...parrots,
      ...peacocks,
      ...pigeons,
      ...robins,
    },
    fontWeights: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fonts: {
      display: 'Gelica, Georgia, serif',
      // Cross-platform font stacks found here: github.com/csstools/sanitize.css#typography
      copy:
        'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      monospace:
        'Menlo, Consolas, Roboto Mono, "Ubuntu Monospace", "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace',
    },
  },
  media: {
    desktop: '(min-width: 1024px)',
    desktopLarge: '(min-width: 1200px)',
    desktopSmall: '(min-width: 768px)',
    reducedMotion: '(prefers-reduced-motion)',
    tablet: '(min-width: 480px)',
  },
  utils: {
    paddingX: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

// eslint-disable-next-line no-restricted-imports
export type { VariantProps } from '@stitches/react';

export const darkTheme = createTheme('dark-theme', {
  colors: {},
});
