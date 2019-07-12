import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';


export const resetConfirmRequest = () => ({
  type: actionTypes.RESETCONFIRMREQUEST,
});

export const resetConfirmSuccess = data => ({
  type: actionTypes.RESETCOFIRMSUCCESS,
  data,
});

export const resetConfirmError = error => ({
  type: actionTypes.RESETCONFIRMERROR,
  error,
});

export const resetConfirmActions = data => async (dispatch) => {
  handleMessages('loading', 'Request processing...');
  try {
    const passData = {
      password: data.resetPassword.password,
      confirm_password: data.resetPassword.confirm_password,
    };
    dispatch(resetConfirmRequest());
    const response = await instance.put(`/account/reset_password/${data.token}`, passData);
    dispatch(resetConfirmSuccess(response.data));
    handleMessages('success', 'Password updated successfully 😄');
    window.location.href = '/';
  } catch (error) {
    dispatch(resetConfirmError(error));
    handleMessages('error', 'Password must have at least 8 characters, with number, letter and a special character 😬');
  }
};
