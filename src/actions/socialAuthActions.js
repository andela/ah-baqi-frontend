import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';

import actionTypes from './types';

let serviceProvider;
const selectProvider = (provider) => {
  switch (provider) {
    case 'google':
      serviceProvider = actionTypes.GOOGLE_AUTH;
      break;
    case 'facebook':
      serviceProvider = actionTypes.FACEBOOK_AUTH;
      break;
    case 'twitter':
      serviceProvider = actionTypes.TWITTER_AUTH;
      break;
    default:
      serviceProvider = 'missing provider';
      break;
  }
};

export const socialAuthActions = (data, provider, cancel) => async (dispatch) => {
  try {
    handleMessages('loading', 'Signing in to your account...');
    const response = await instance.post(
      '/users/social_auth/',
      data,
    );

    selectProvider(provider);

    dispatch({
      type: serviceProvider,
      payload: response.data,
    });

    localStorage.setItem('token', response.data.user.tokem);
    localStorage.setItem('username', response.data.user.username);
    localStorage.setItem('isLoggedIn', true);
    handleMessages('success', 'Successfully Signed in 😄');
    cancel();
  } catch (error) {
    handleMessages('error', 'Oops!! 😬 , an error occured, please try again');
  }
};

export const firebaseAuthAction = cancel => async (dispatch) => {
  try {
    handleMessages('loading', 'Signing in to your account...');
    const response = await actionTypes.FIREBASE_AUTH.signInWithPopup(actionTypes.TWITTER_FIRE);
    const data = {
      token_provider: 'twitter',
      access_token: response.credential.accessToken,
      access_token_secret: response.credential.secret,
    };
    dispatch(socialAuthActions(data, 'twitter', cancel));
  } catch (error) {
    handleMessages('error', 'Oops!! 😬 , Firebase error occured, please try again');
  }
};
