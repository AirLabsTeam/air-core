import { Box, BoxStylingProps } from '../../Box';

export interface ActionSheetDividerProps extends Pick<BoxStylingProps, 'tx'> {}

export const ActionSheetDivider = ({ tx }: ActionSheetDividerProps) => {
  return <Box as="hr" tx={{ backgroundColor: 'pigeon100', height: 1, border: 0, my: 8, ...tx }} />;
};
