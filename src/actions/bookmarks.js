import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';


export const getBookmarks = () => async (dispatch) => {
  try {
    const response = await instance.get(
      '/bookmark/all/',
    );
    dispatch({
      type: actionTypes.GET_ALL_BOOKMARKS,
      payload: response.data,
    });
  } catch {
    handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
  }
};

export const addBookmark = slug => async (dispatch) => {
  try {
    await instance.post(
      `/articles/${slug}/bookmark`,
    );
    dispatch(getBookmarks());
    handleMessages('success', 'Article bookmarked');
  } catch {
    handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
  }
};

export const removeBookmark = slug => async (dispatch) => {
  try {
    await instance.delete(
      `/articles/${slug}/bookmark`,
    );
    dispatch(getBookmarks());
    handleMessages('success', 'Bookmark removed');
  } catch {
    handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
  }
};
