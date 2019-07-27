import actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE:
      return {
        ...action.payload,
        actionCalled: true,
      };
    case actionTypes.FETCH_USER_ARTICLES:
      return {
        ...state,
        userArticles: action.payload,
        articlesFetched: true,
        actionCalled: true,
      };
    default:
      return {
        ...state,
        actionCalled: true,
      };
  }
};
