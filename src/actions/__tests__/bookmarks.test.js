import { instance } from '../../utils/axios';
import store from '../../utils/testUtils';
import {
  getBookmarks,
  addBookmark,
  removeBookmark,
} from '../bookmarks';

jest.spyOn(instance, 'post');
jest.spyOn(instance, 'delete');
jest.spyOn(instance, 'get');

describe('bookmark actions', () => {
  test('addBookmark action is called', async () => {
    instance.post.mockImplementation(() => Promise.resolve({}));

    await store.dispatch(addBookmark('my_article'));
    expect(instance.post).toHaveBeenCalledWith('/articles/my_article/bookmark');
  });

  test('getBookmarks action is called', async () => {
    instance.get.mockImplementation(() => Promise.resolve({}));

    await store.dispatch(getBookmarks());
    expect(instance.get).toHaveBeenCalledWith('/bookmark/all/');
  });

  test('removeBookmark action is called', async () => {
    instance.delete.mockImplementation(() => Promise.resolve({}));

    await store.dispatch(removeBookmark('my_article'));
    expect(instance.delete).toHaveBeenCalledWith('/articles/my_article/bookmark');
  });
  test('addBookmark action fail', async () => {
    instance.post.mockImplementation(() => Promise.reject({}));

    await store.dispatch(addBookmark('my_article'));
    expect(store.getActions()[2].payload).toBe(undefined);
  });
  test('removeBookmark action fail', async () => {
    instance.delete.mockImplementation(() => Promise.reject({}));

    await store.dispatch(removeBookmark('my_article'));
    expect(store.getActions()[2].payload).toBe(undefined);
  });
  test('getBookmarks action fail', async () => {
    instance.get.mockImplementation(() => Promise.reject({}));

    await store.dispatch(getBookmarks());
    expect(store.getActions()[2].payload).toBe(undefined);
  });
});
