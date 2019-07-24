import actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_BOOKMARKS:
      return action.payload;
    default:
      return state;
  }
};
