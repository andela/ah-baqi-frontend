import { instance } from '../../utils/axios';
import store from '../../utils/testUtils';
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

jest.spyOn(instance, 'post');
jest.spyOn(instance, 'delete');
jest.spyOn(instance, 'put');

describe('comment actions', () => {
  const slug = 'my_article';
  const comment = {
    comment: {
      body: 'i love fish',
    },
  };
  const nestComment = { comment: { body: 'i love fish' } };

  test('addComment action is called', async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(addComment('article', comment));
    expect(instance.post).toHaveBeenCalledWith('/articles/article/comments', comment);
  });
  test('addNestedComment action is called', async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(addNestedComment('article', nestComment, comment));
    expect(instance.post).toHaveBeenCalledWith(`/articles/article/comments/${nestComment}/reply`, comment);
  });
  test('deleteComment action is called', async () => {
    instance.delete.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(deleteComment('id', comment));
    expect(instance.delete).toHaveBeenCalledWith(`/articles/${comment}/comments/id`);
  });
  test('editCommentItem action is called', async () => {
    instance.put.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(editCommentItem('id', slug, comment));
    expect(instance.put).toHaveBeenCalledWith(`/articles/id/comments/${slug}`, comment);
  });
  test('editNestedCommentItem action is called', async () => {
    instance.put.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(editNestedCommentItem(slug, 'commentId', 'replyId', comment));
    expect(instance.put).toHaveBeenCalledWith(`/articles/${slug}/comments/commentId/reply/replyId`, comment);
  });
  test('deleteNestedCommentItem action is called', async () => {
    instance.put.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(deleteNestedCommentItem(slug, 'commentId', 'replyId'));
    expect(instance.delete).toHaveBeenCalledWith(`/articles/${slug}/comments/commentId/reply/replyId`);
  });
  test('dislikeComment action is called', async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(dislikeComment(slug, 'commentId'));
    expect(instance.post).toHaveBeenCalledWith(`/articles/${slug}/comments/commentId/dislike`);
  });
  test('likeComment action is called', async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: { comment },
    }));
    await store.dispatch(likeComment(slug, 'commentId'));
    expect(instance.post).toHaveBeenCalledWith(`/articles/${slug}/comments/commentId/like`);
  });
});
