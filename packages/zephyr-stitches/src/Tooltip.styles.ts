import * as RadixTooltip from '@radix-ui/react-tooltip';
import { darkTheme, styled } from './stitches.config';

export const Content = styled(RadixTooltip.Content, {
  backgroundColor: '$black',
  borderRadius: 4,
  paddingX: 8,
  paddingY: 6,
  color: '$white',

  [`.${darkTheme} &`]: {
    backgroundColor: '$pigeon050',
    color: '$pigeon900',
  },
});

export const Arrow = styled(RadixTooltip.Arrow, {});
