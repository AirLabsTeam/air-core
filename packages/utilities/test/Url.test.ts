import { isValidUrl } from '../src';

describe('isValidUrl', () => {
  describe('isValidUrl', () => {
    it('returns true if url is valid', () => {
      expect(isValidUrl('www.bing.com')).toBe(true);
      expect(isValidUrl('https://www.instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
      expect(
        isValidUrl(
          'https://www.google.com/search?q=garfield&sxsrf=ACYBGNSB_Q8eA-kMWvaK7IdzUwanLeen-g:1574093382306&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiwoJTnkvTlAhVrU98KHZI7BGwQ_AUIEigB&biw=2747&bih=1213',
        ),
      ).toBe(true);
    });
    it('returns false if url is invalid', () => {
      expect(isValidUrl('some.thing')).toBe(false);
      expect(isValidUrl('a string')).toBe(false);
      expect(isValidUrl('foo-bar.baz')).toBe(false);
    });
  });
});
