import actionTypes from '../actions/types';

export default (state = { bookmarks: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
        actionCalled: true,
      };
    default:
      return {
        ...state,
        actionCalled: true,
      };
  }
};
