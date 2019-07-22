import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyBZpoTv-yoTpLnsL_nXeBk7qDYn9FpOK68',
  authDomain: 'ah-baqi.firebaseapp.com',
});

const firebaseAuth = firebase.auth();
const twitter = new firebase.auth.TwitterAuthProvider();

const actionTypes = {
  DISPLAY_MODAL: 'DISPLAY_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  EMAIL_SIGNUP: 'EMAIL_SIGNUP',
  EMAIL_LOGIN: 'EMAIL_LOGIN',
  EMAIL_LOGIN_FORM: 'EMAIL_LOGIN_FORM',
  EMAIL_SIGNUP_FORM: 'EMAIL_SIGNUP_FORM',
  GOOGLE_AUTH: 'GOOGLE_AUTH',
  TWITTER_FIRE: twitter,
  TWITTER_AUTH: 'TWITTER_AUTH',
  FIREBASE_AUTH: firebaseAuth,
  FACEBOOK_AUTH: 'FACEBOOK_AUTH',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
  EMAIL_SIGNUP_REQUEST: 'EMAIL_SIGNUP_REQUEST',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  EDIT_PROFILE_MODAL_FORM: 'EDIT_PROFILE_MODAL_FORM',
  RESETPASSWORDREQUEST: 'RESETPASSWORDREQUEST',
  RESETPASSWORDLINK: 'RESETPASSWORDLINK',
  RESETPASSWORDLINKERROR: 'RESETPASSWORDLINKERROR',
  RESETCONFIRMREQUEST: 'RESETCONFIRMREQUEST',
  RESETCOFIRMSUCCESS: 'RESETCOFIRMSUCCESS',
  RESETCONFIRMERROR: 'RESETCONFIRMERROR',
  RATE_ARTICLE: 'RATE_ARTICLE',
  RATE_ARTICLE_ERROR: 'RATE_ARTICLE_ERROR',
  CREATE_ARTICLE: 'CREATE_ARTICLE',
  EDIT_ARTICLE: 'EDIT_ARTICLE',
  GET_SINGLE_ARTICLES: 'GET_SINGLE_ARTICLES',
  GET_ALL_ARTICLES: 'GET_ALL_ARTICLES',
  USER_PROFILE: 'USER_PROFILE',
  EDIT_USER_PROFILE: 'EDIT_USER_PROFILE',
  EDIT_USER_PROFILE_ERROR: 'EDIT_USER_PROFILE_ERROR',
  FETCH_USER_ARTICLES: 'FETCH_USER_ARTICLES',
  TOGGLE_LIKE: 'TOGGLE_LIKE',
};

export default actionTypes;