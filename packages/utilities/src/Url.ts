/**
 * @description Determines whether a string is a valid URL
 * @example isValidUrl('https://www.google.com') ===> true
 * @param url The URL to be validated
 * @returns A boolean value that represents whether this is a valid URL.
 */
export const isValidUrl = (url: string): boolean => {
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    url,
  );
};
