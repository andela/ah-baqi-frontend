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
};

export default actionTypes;
