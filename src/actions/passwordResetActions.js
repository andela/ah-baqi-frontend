import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';


export const resetPasswordRequest = () => ({
  type: actionTypes.RESETPASSWORDREQUEST,
});

export const resetPassword = data => ({
  type: actionTypes.RESETPASSWORDLINK,
  data,
});

export const resetPasswordError = error => ({
  type: actionTypes.RESETPASSWORDLINKERROR,
  error,
});

export const resetPasswordActions = data => async (dispatch) => {
  handleMessages('loading', 'Request processing...');
  try {
    dispatch(resetPasswordRequest());
    const response = await instance.post('/account/forgot_password/', data);
    dispatch(resetPassword(response.data));
    handleMessages('success', 'Please use the provided link to reset your password 😄');
  } catch (error) {
    dispatch(resetPasswordError(error));
    handleMessages('error', 'Account with that email does not exist 😬');
  }
};
