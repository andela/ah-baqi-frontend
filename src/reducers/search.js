import actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        resultsReturned: true,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
