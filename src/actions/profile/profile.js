import { instance } from '../../utils/axios';


export const actionTypes = {
  USER_PROFILE: 'USER_PROFILE',
  EDIT_USER_PROFILE: 'EDIT_USER_PROFILE',
  EDIT_USER_PROFILE_ERROR: 'EDIT_USER_PROFILE_ERROR',
};

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
