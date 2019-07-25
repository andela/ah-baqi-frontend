import { instance } from '../utils/axios';
import actionTypes from './types';
import message from '../utils/messages';

export const fetchFollowers = authorId => async (dispatch) => {
  try {
    const response = await instance.get(`profiles/${authorId}/followers/`);
    localStorage.setItem('followers', JSON.stringify(response.data.followers));
    localStorage.setItem('followersCount', JSON.parse(localStorage.followers).length);
    dispatch({
      type: actionTypes.FETCH_FOLLOWERS,
      payload: response.data.followers,
    });
  } catch (error) {
    /403/.test(error.message) // eslint-disable-line
      ? message('error', 'Login and try again!')
      : message('error', 'Oops! An error occurred');
  }
};

export const fetchFollowees = authorId => async (dispatch) => {
  try {
    const response = await instance.get(`profiles/${authorId}/following/`);
    localStorage.setItem('followees', JSON.stringify(response.data.following));
    localStorage.setItem('followeesCount', JSON.parse(localStorage.followees).length);
    dispatch(fetchFollowers(authorId));
  } catch (error) {
    /403/.test(error.message) // eslint-disable-line
      ? message('error', 'Login and try again!')
      : message('error', 'Oops! An error occurred');
  }
};

export const followUser = authorId => async (dispatch) => {
  try {
    const response = await instance.post(`profiles/${authorId}/follow/`);
    dispatch({ type: actionTypes.FOLLOW_USER });
    message('success', response.data.detail.message);
  } catch (error) {
    /403/.test(error.message) // eslint-disable-line
      ? message('error', 'Login and try again!')
      : message('error', 'Oops! An error occurred');
  }
};

export const unfollowUser = authorId => async (dispatch) => {
  try {
    const response = await instance.delete(`profiles/${authorId}/unfollow/`);
    dispatch({ type: actionTypes.UNFOLLOW_USER });
    message('success', response.data.message);
  } catch (error) {
    /403/.test(error.message) // eslint-disable-line
      ? message('error', 'Login and try again!')
      : message('error', 'Oops! An error occurred');
  }
};
