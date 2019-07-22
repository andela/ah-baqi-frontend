import { instance, baseAxios } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';

let response;

export const getArticle = (slug, history=null) => async (dispatch) => {
  try {
    response = await baseAxios.get(
      `/articles/${slug}/`,
    );

    dispatch({
      type: actionTypes.GET_SINGLE_ARTICLES,
      payload: response.data,
    });

    if (history) {
      history.push('/articles/update');
    }
  } catch (error) {
    handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
  }
};

export const getAllArticles = () => async (dispatch) => {
  try {
    response = await baseAxios.get(
      '/articles/feed/',
    );
    dispatch({
      type: actionTypes.GET_ALL_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
  }
};

export const createArticle = (data, history) => async (dispatch) => {
  try {
    handleMessages('loading', 'Your post is being uploaded... ??');
    response = await instance.post(
      '/articles/',
      { article: data },
    );
    dispatch({
      type: actionTypes.CREATE_ARTICLE,
      payload: response.data,
      created: true,
    });
    handleMessages('success', 'Your article was successfully created ??');
    history.push(`/articles/${response.data.slug}`);
  } catch (error) {
    handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
  }
};

export const editArticle = (slug, data, history) => async (dispatch) => {
  try {
    response = await instance.put(`/articles/${slug}/`, data);
    dispatch({
      type: actionTypes.EDIT_ARTICLE,
      payload: response.data,
    });
    handleMessages('success', 'Article successfully edited 😄');
    history.push(`/articles/${response.data.slug}`);
  } catch (error) {
    handleMessages('error', 'Failed 😬');
  }
};

export const deleteArticle = (slug, history) => async (dispatch) => {
  try {
    handleMessages('loading', 'Deleting article...');
    await instance.delete(`/articles/${slug}/`);
    const userId = localStorage.getItem('user_id');
    response = await instance.get(`/user_articles/${userId}/`);
    dispatch({
      type: actionTypes.FETCH_USER_ARTICLES,
      payload: response.data,
    });
    history.push('/profile');
    handleMessages('success', 'Article successfully deleted 😄');
  } catch (error) {
    handleMessages('error', 'Failed 😬');
  }
};

export const toggleLike = slug => async (dispatch) => {
  try {
    response = await baseAxios.post(
      `/articles/${slug}/like`,
    );
    const payload = response.data.reaction.data;
    dispatch({
      type: actionTypes.TOGGLE_LIKE,
      payload,
    });
    getArticle(slug);
    localStorage.setItem('beenLiked', payload.article_liked);
    localStorage.setItem('likes', payload.likes);
    payload.article_liked
      ? handleMessages('success', 'Article liked!')
      : handleMessages('success', 'Article disliked!');
  } catch (error) {
    /403/.test(error.message)
      ? handleMessages('error', 'You must be logged in to like')
      : handleMessages('error', 'Oops! An error occurred');
  }
};
