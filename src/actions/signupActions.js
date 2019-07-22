import axios from 'axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';


const onEmailRequest = payload => ({
  type: actionTypes.EMAIL_SIGNUP_REQUEST,
  payload,
});

const signupActions = (data, cancel) => async (dispatch) => {
  handleMessages('loading', 'Validating your request...');
  try {
    const response = await axios.post(
      'https://ah-django-staging.herokuapp.com/api/users/',
      { user: data },
    );
    dispatch(onEmailRequest(response.data.user.data));

    const userDetails = [
      { token: response.data.user.data.token },
      { username: response.data.user.data.username },
    ];

    userDetails.forEach((item) => {
      localStorage.setItem(`${Object.keys(item)}`, Object.values(item));
    });

    localStorage.setItem('isLoggedIn', true);
    handleMessages('success', 'Successfully registered 😄');
    localStorage.setItem('isLoggedIn', true);
    cancel();
  } catch (error) {
    const error409 = 'A user with that email or username exists 😬';
    const error400 = 'Password must be atleast 8 characters with a number and a special character 😬';
    /409/.test(error.message) // eslint-disable-line
      ? handleMessages('error', error409)
      : handleMessages('error', error400);
  }
};

export default signupActions;
