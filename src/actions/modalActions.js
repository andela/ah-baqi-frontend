import actionTypes from './types';

const displayModal = () => ({
  type: actionTypes.DISPLAY_MODAL,
});

const handleCancel = () => ({
  type: actionTypes.HIDE_MODAL,
});

const onEmailSignup = () => ({
  type: actionTypes.EMAIL_SIGNUP,
});

const onEmailLogin = () => ({
  type: actionTypes.EMAIL_LOGIN,
});

const showEmailSignupForm = () => ({
  type: actionTypes.EMAIL_SIGNUP_FORM,
});

const showEmailLoginForm = () => ({
  type: actionTypes.EMAIL_LOGIN_FORM,
});

export const hideModalActions = () => (dispatch) => {
  dispatch(handleCancel());
};

export const displayModalActions = () => (dispatch) => {
  dispatch(displayModal());
};

export const emailSignupAction = () => (dispatch) => {
  dispatch(onEmailSignup());
};

export const emailLoginAction = () => (dispatch) => {
  dispatch(onEmailLogin());
};

export const formSignupAction = () => (dispatch) => {
  dispatch(showEmailSignupForm());
};

export const formLoginAction = () => (dispatch) => {
  dispatch(showEmailLoginForm());
};
