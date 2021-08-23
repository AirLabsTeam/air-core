import css from '@styled-system/css';

export const inlineStyles = ({ tx, theme }: any) => css({ ...tx })(theme);
