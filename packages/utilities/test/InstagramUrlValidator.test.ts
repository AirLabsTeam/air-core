import { isValidInstagramAccount, isValidInstagramPostUrl } from '../src';

describe('isValidInstagramPostUrl', () => {
  it('returns `true` when passing any valid version of the "BvcGpuTB_-s" post URL', () => {
    expect(isValidInstagramPostUrl('instagram.com/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('instagram.com/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('www.instagram.com/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('www.instagram.com/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('http://instagram.com/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('http://instagram.com/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('https://instagram.com/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('https://instagram.com/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('http://www.instagram.com/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('http://www.instagram.com/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('https://www.instagram.com/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('https://www.instagram.com/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('instagram.com/therock/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('www.instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('www.instagram.com/therock/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('http://instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('http://instagram.com/therock/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('https://instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('https://instagram.com/therock/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('http://www.instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('http://www.instagram.com/therock/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('https://www.instagram.com/therock/p/BvcGpuTB_-s')).toBe(true);
    expect(isValidInstagramPostUrl('https://www.instagram.com/therock/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('https://www.instagr.am/p/BvcGpuTB_-s/')).toBe(true);
    expect(isValidInstagramPostUrl('https://www.instagr.am/therock/p/BvcGpuTB_-s')).toBe(true);
  });

  it('returns `false` when passing any invalid version of the "BvcGpuTB_-s" post URL', () => {
    expect(isValidInstagramPostUrl('air.media/p/BvcGpuTB_-s')).toBe(false);
    expect(isValidInstagramPostUrl('https://www.instagram.com/p//')).toBe(false);
  });
});

describe('isValidInstagramAccount', () => {
  it('returns `true` when passing any valid version of the "world_record_egg" account URL', () => {
    expect(isValidInstagramAccount('world_record_egg')).toBe(true);
    expect(isValidInstagramAccount('https://www.instagram.com/world_record_egg')).toBe(true);
    expect(isValidInstagramAccount('http://instagr.am/world_record_egg')).toBe(true);
    expect(isValidInstagramAccount('instagr.am/world_record_egg')).toBe(true);
    expect(isValidInstagramAccount('http://instagr.am/world_record_egg?hl=en')).toBe(true);
    expect(isValidInstagramAccount('http://instagr.am/world_record_egg/?hl=en')).toBe(true);
    expect(isValidInstagramAccount('http://instagr.am/world_record_egg/gibberish!')).toBe(true);
  });

  it('returns `true` when passing any valid account with . in the username', () => {
    expect(isValidInstagramAccount('world.record.egg')).toBe(true);
  });

  it('returns `false` when passing any invalid version of the "world_record_egg" account URL', () => {
    expect(isValidInstagramAccount('air.media/world_record_egg')).toBe(false);
    expect(isValidInstagramAccount('https://www.instagram//')).toBe(false);
  });
});
