import { instance } from '../../utils/axios';
import store, { testDispatchWithPayload } from '../../utils/testUtils';
import {
  addComment,
  addNestedComment,
  deleteComment,
  editCommentItem,
  editNestedCommentItem,
  deleteNestedCommentItem,
  dislikeComment,
  likeComment,
} from '../comments';

const catchError = (action, slug) => {
  test('should test addComment fails', async () => {
    jest.spyOn(instance, 'post');
    instance.post.mockImplementation(() => Promise.reject());
    try {
      await store.dispatch(action(slug));
    } catch (e) {
      expect(e.length).toBe(undefined);
    }
  });
};

describe('comment actions', () => {
  const slug = 'my_article';
  beforeEach(() => {
    store.clearActions();
  });

  testDispatchWithPayload(store, addComment, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, addNestedComment, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, deleteComment, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, editCommentItem, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, editNestedCommentItem, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, deleteNestedCommentItem, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, dislikeComment, 'GET_SINGLE_ARTICLES');
  testDispatchWithPayload(store, likeComment, 'GET_SINGLE_ARTICLES');

  catchError(addComment, slug);
  catchError(addNestedComment, slug);
});
