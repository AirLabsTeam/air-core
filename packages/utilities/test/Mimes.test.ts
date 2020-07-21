import { getMimeTypeFromExtension } from '../src';

describe('getMimeTypeFromExtension', () => {
  it(`it returns a mime type when passing an extension`, () => {
    expect(getMimeTypeFromExtension('gif')).toBe('image/gif');
    expect(getMimeTypeFromExtension('png')).toBe('image/png');
    expect(getMimeTypeFromExtension('mov')).toBe('video/quicktime');
    expect(getMimeTypeFromExtension('jpg')).toBe('image/jpeg');
  });

  it(`it throws an error when passing an invalid extension`, () => {
    try {
      // @ts-ignore
      getMimeTypeFromExtension('gifs');
    } catch (error) {
      expect(error.message).toBe(`'gifs' is not a valid extension`);
    }
  });
});
