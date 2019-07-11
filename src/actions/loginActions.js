import instance from '../utils/axios';
import handleMessages from '../utils/messages';

import actionTypes from './types';

const loginActions = (data, cancel) => async (dispatch) => {
  handleMessages('loading', 'Logging in...');
  try {
    const response = await instance.post('/users/login', { user: data });
    dispatch({
      type: actionTypes.LOG_IN,
      payload: response.data,
    });
    handleMessages('success', 'Successfully logged in 😄');
    const userDetails = [
      { token: response.data.user.token },
      { username: response.data.user.username },
    ];
    userDetails.forEach(item => (
      localStorage.setItem(`${Object.keys(item)}`, Object.values(item))
    ));
    cancel();
  } catch (error) {
    handleMessages('error', 'Invalid username or password 😬');
  }
};

export default loginActions;
