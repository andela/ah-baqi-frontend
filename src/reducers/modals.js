import actionTypes from '../actions/types';

const initialState = {
  visible: false,
  authAction: '',
  error: null,
  isLoggedIn: false,
  actionCalled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_MODAL:
      return {
        ...state,
        visible: true,
        actionCalled: true,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        visible: false,
        actionCalled: true,
      };
    case actionTypes.EMAIL_SIGNUP:
      return {
        ...state,
        visible: true,
        authAction: 'signup',
        actionCalled: true,
      };
    case actionTypes.EMAIL_LOGIN:
      return {
        ...state,
        visible: true,
        authAction: 'login',
        actionCalled: true,
      };
    case actionTypes.EMAIL_LOGIN_FORM:
      return {
        ...state,
        visible: true,
        authAction: 'loginForm',
        actionCalled: true,
      };
    case actionTypes.EMAIL_SIGNUP_FORM:

      return {
        ...state,
        visible: true,
        authAction: 'signupForm',
        actionCalled: true,
      };
    default:
      return state;
  }
};
