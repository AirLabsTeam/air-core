export type fontWeightName = 'bold' | 'medium' | 'regular' | 'semibold';

export const fontWeights: { [key in fontWeightName]: number } = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};
