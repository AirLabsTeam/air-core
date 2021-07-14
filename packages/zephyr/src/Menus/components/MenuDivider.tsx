import { Box, BoxStylingProps } from '../../Box';

export interface MenuDividerProps extends Pick<BoxStylingProps, 'tx'> {}

export const MenuDivider = ({ tx }: MenuDividerProps) => {
  return <Box as="hr" tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, my: 8, ...tx }} />;
};
