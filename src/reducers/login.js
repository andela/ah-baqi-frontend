import actionTypes from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  isLoggedIn: false,
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
    default:
      return {
        ...state,
        actionCalled: true,
      };
  }
}
