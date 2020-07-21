/**
 * @description Determines whether a string is a valid Instagram post URL
 * @example isValidInstagramUrl('https://www.instagram.com/p/BsOGulcndj-/') ===> true
 * @param url The URL to be validated
 * @returns A boolean value that represents whether the URL is a valid Instagram post URL
 */
export const isValidInstagramUrl = (url: string = ''): boolean => {
  const INSTAGRAM_URL_REGEX = /(http(s)?:\/\/)?(www\.)?(instagram.com|instagr.am)\/(\w+\/)?p\/([a-zA-Z0-9_-]+)(\/)?/;

  return INSTAGRAM_URL_REGEX.test(url);
};

/**
 * @description Determines whether a string is a valid Instagram post URL
 * @example isValidInstagramPostUrl('https://www.instagram.com/p/BsOGulcndj-/') ===> true
 * @param url The URL to be validated
 * @returns A boolean value that represents whether the URL is a valid Instagram post URL
 */
export const isValidInstagramPostUrl = (url: string = ''): boolean => isValidInstagramUrl(url);

export const getInstagramAccountUsername = (urlOrUsername: string = ''): string => {
  const urlContents = /.*((instagram\.com)|(instagr\.am))\/([\w\d_.]+)/.exec(urlOrUsername);

  // If it's url-like contents will have the username in its fifth slot
  return urlContents === null ? urlOrUsername : urlContents[4];
};

/**
 * @description Determines whether a string is a valid Instagram account
 * @example
 *  isValidInstagramAccount('world_record_egg') ===> true
 *  isValidInstagramAccount('world-record-egg') ===> false
 * @param urlOrUsername The username or URL to be validated
 * @returns A boolean value that represents whether the username is a valid Instagram account
 */
export const isValidInstagramAccount = (urlOrUsername: string = ''): boolean =>
  /^[a-zA-Z0-9_.]+$/.test(getInstagramAccountUsername(urlOrUsername));
