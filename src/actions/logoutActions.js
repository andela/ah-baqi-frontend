import actionTypes from './types';

const logoutActions = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOG_OUT,
  });
  window.location.href = '/';
  localStorage.removeItem('username');
  localStorage.removeItem('token');
};

export default logoutActions;
