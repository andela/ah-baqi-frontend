import actionTypes from '../actions/types';

const initialState = {
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
