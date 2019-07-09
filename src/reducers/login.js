import actionTypes from '../actions/types';

const initialState = {
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
      };
    case actionTypes.FACEBOOK_AUTH:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actionTypes.TWITTER_AUTH:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}
