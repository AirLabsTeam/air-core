/**
 * @description Takes a name and returns the corresponding initials
 * @example formatNameToInitials('Chris Nager') ===> 'CN'
 * @returns Uppercase letters that represent the passed name's initials
 */
export const formatNameToInitials = (name: string): string =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
