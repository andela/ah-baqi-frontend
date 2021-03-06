import actionTypes from '../actions/types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RATE_ARTICLE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case actionTypes.RATE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
