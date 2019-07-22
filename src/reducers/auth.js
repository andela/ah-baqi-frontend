import actionTypes from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  actionCalled: false,
  email: '',
  visible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GOOGLE_AUTH:
      return {
        ...state,
        isLoggedIn: true,
        actionCalled: true,
      };
    case actionTypes.FACEBOOK_AUTH:
      return {
        ...state,
        isLoggedIn: true,
        actionCalled: true,
      };
    case actionTypes.TWITTER_AUTH:
      return {
        ...state,
        isLoggedIn: true,
        actionCalled: true,
      };

    case actionTypes.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        actionCalled: true,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        actionCalled: true,
      };
    case actionTypes.EMAIL_SIGNUP_REQUEST:
      return {
        ...state,
        visible: true,
        isLoggedIn: true,
        email: action.payload,
        actionCalled: true,
      };
    default:
      return state;
  }
}
