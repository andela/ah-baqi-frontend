import actionTypes from '../actions/types';

const initialState = {
  visible: false,
  authAction: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_MODAL:
      return {
        ...state,
        visible: true,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        visible: false,
      };
    case actionTypes.EMAIL_SIGNUP:
      return {
        ...state,
        visible: true,
        authAction: 'signup',
      };
    case actionTypes.EMAIL_LOGIN:
      return {
        ...state,
        visible: true,
        authAction: 'login',
      };
    case actionTypes.EMAIL_LOGIN_FORM:
      return {
        ...state,
        visible: true,
        authAction: 'loginForm',
      };
    case actionTypes.EMAIL_SIGNUP_FORM:
      return {
        ...state,
        visible: true,
        authAction: 'signupForm',
      };
    default:
      return state;
  }
};
