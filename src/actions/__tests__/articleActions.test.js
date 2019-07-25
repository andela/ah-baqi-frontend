import {
  getAllArticles, getArticle, createArticle, deleteArticle, editArticle, toggleLike,
} from '../articleActions';
import store, { mockFn } from '../../utils/testUtils';
import { instance } from '../../utils/axios';

const resDataFT = { id: 1, body: 'some text', image: 'some url' };

describe('articleActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('should test create action for articles', async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    await store.dispatch(createArticle({}));
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('CREATE_ARTICLE');
  });

  test('should test edit action for articles', async () => {
    instance.put.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    await store.dispatch(editArticle('my_slug', {}, mockFn));
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('EDIT_ARTICLE');
  });

  test('should test get single action for articles', async () => {
    instance.get.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    await store.dispatch(getArticle('my_slug', mockFn));
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('GET_SINGLE_ARTICLES');
  });

  test('should test get all action for articles', async () => {
    instance.get.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    await store.dispatch(getAllArticles());
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('GET_ALL_ARTICLES');
  });

  test('should test delete action for articles', async () => {
    instance.delete.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));
    await store.dispatch(deleteArticle('slug', mockFn));
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('FETCH_USER_ARTICLES');
  });
  test('toggleLike action is called', async () => {
    instance.get.mockImplementation(() => Promise.resolve({

    }));

    await store.dispatch(toggleLike('some_art'));
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(instance.get).toHaveBeenCalledWith('/articles/my_slug/');
  });
});
