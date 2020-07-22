export type FileExtension =
  | 'gif'
  | 'jpg'
  | 'jpeg'
  | 'jpe'
  | 'png'
  | 'qt'
  | 'mov'
  | 'mp4'
  | 'mp4v'
  | 'mpg4'
  | 'm4v'
  | 'avi'
  | 'wmv'
  | 'heic';

export enum MimeType {
  JPG = 'image/jpeg',
  GIF = 'image/gif',
  PNG = 'image/png',
  MP4 = 'video/mp4',
  QuickTime = 'video/quicktime',
  AVI = 'video/x-msvideo',
  WMV = 'video/x-ms-wmv',
  HEIC = 'image/heic',
}

export const mimeTable: {
  ext: FileExtension[];
  type: MimeType;
}[] = [
  { ext: ['gif'], type: MimeType.GIF },
  { ext: ['jpe', 'jpeg', 'jpg'], type: MimeType.JPG },
  { ext: ['png'], type: MimeType.PNG },
  { ext: ['qt', 'mov'], type: MimeType.QuickTime },
  { ext: ['mp4', 'mp4v', 'mpg4', 'm4v'], type: MimeType.MP4 },
  { ext: ['avi'], type: MimeType.AVI },
  { ext: ['wmv'], type: MimeType.WMV },
  { ext: ['heic'], type: MimeType.HEIC },
];

/**
 * This function returns a mime type based on the extension that you pass in, and returns 'unknown' if it doesn't recognize the extension type
 * @example getMimeTypeFromExtension('gif') ===> 'image/gif'
 * @param extension The extension type you want the mime for
 * @returns Returns a mime type like 'image/gif'
 */
export const getMimeTypeFromExtension = (extension: FileExtension): MimeType | never => {
  const result = mimeTable.find(({ ext }) => ext.includes(extension));

  if (!result) {
    throw new Error(`'${extension}' is not a valid extension`);
  }

  return result.type;
};
