import imageUploader from './imageUploader';
import { mockFn } from './testUtils';

describe('imageUploader', () => {
  test('returns image', () => {
    const debug = { hello: 'world' };
    const images = [new Blob([JSON.stringify(debug, null, 2)], { type: 'application/json' })];
    const imageUrl = 'image.mine.com';
    imageUploader(images, imageUrl, mockFn());
    expect(mockFn).toHaveBeenCalled();
  });
});
