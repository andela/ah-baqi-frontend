import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import { getArticle } from './articleActions';

export const addComment = (slug, value) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments`, value);
    dispatch(getArticle(slug));
    handleMessages('success', 'Comment added Successfully');
  } catch (error) {
    error.message.match(/403/) // eslint-disable-line
      ? handleMessages('error', 'Please login to add acomment')
      : handleMessages('error', 'an error has occured');
  }
};

export const addNestedComment = (slug, value, id) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${id}/reply`, value);
    handleMessages('success', 'Comment added Successfully');
    dispatch(getArticle(slug));
  } catch (error) {
    error.message.match(/403/) // eslint-disable-line
      ? handleMessages('error', 'Please login to add acomment')
      : handleMessages('error', 'an error has occured');
  }
};

export const deleteComment = (id, slug) => async (dispatch) => {
  await instance.delete(`/articles/${slug}/comments/${id}`);
  dispatch(getArticle(slug));
  handleMessages('success', 'Deleted Successfully');
};

export const editCommentItem = (slug, id, value) => async (dispatch) => {
  await instance.put(`/articles/${slug}/comments/${id}`, value);
  handleMessages('success', 'Comment edited');
  dispatch(getArticle(slug));
};

export const editNestedCommentItem = (slug, commentId, replyId, value) => async (dispatch) => {
  await instance.put(`/articles/${slug}/comments/${commentId}/reply/${replyId}`, value);
  handleMessages('success', 'Comment edited');
  dispatch(getArticle(slug));
};

export const deleteNestedCommentItem = (slug, commentId, replyId) => async (dispatch) => {
  await instance.delete(`/articles/${slug}/comments/${commentId}/reply/${replyId}`);
  handleMessages('success', 'Comment deleted');
  dispatch(getArticle(slug));
};

export const dislikeComment = (slug, commentId) => async (dispatch) => {
  await instance.post(`/articles/${slug}/comments/${commentId}/dislike`);
  dispatch(getArticle(slug));
};

export const likeComment = (slug, commentId) => async (dispatch) => {
  await instance.post(`/articles/${slug}/comments/${commentId}/like`);
  dispatch(getArticle(slug));
};
