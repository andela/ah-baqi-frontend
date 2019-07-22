import { instance } from '../utils/axios';
import actionTypes from './types';
import handleMessages from '../utils/messages';

export const getUserProfile = username => async (dispatch) => {
  try {
    const response = await instance.get(`/profiles/${username}/`);
    dispatch({
      type: actionTypes.USER_PROFILE,
      payload: response.data,
    });
    localStorage.setItem('image', response.data.profiles.profile.image);
  } catch (error) {
    dispatch({
      type: actionTypes.EDIT_USER_PROFILE_ERROR,
      payload: 'Error',
    });
  }
};

export const editUserProfile = (username, values) => async (dispatch) => {
  try {
    await instance.patch(`/profiles/${username}/edit/`, values);
    dispatch(getUserProfile(username));
  } catch (error) {
    dispatch({
      type: actionTypes.EDIT_USER_PROFILE_ERROR,
      payload: 'Error',
    });
  }
};

export const getUserArticles = userId => async (dispatch) => {
  try {
    const response = await instance.get(`/user_articles/${userId}/`);
    dispatch({
      type: actionTypes.FETCH_USER_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    handleMessages('error', 'Something went wrong while fetching your articles 😬');
  }
};
