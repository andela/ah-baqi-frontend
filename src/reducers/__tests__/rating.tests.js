import ratingArticles from '../ratingArticles';
import actionTypes from '../../actions/types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

describe('Fetch rate articles link', () => {
  it('should have the initial state', () => {
    expect(ratingArticles(initialState, {})).toEqual({
      data: {},
      error: null,
      loading: false,
    });
  });
  it('should set loading to false when RATEARTICLE is dispatched', () => {
    expect(ratingArticles(initialState,
      { type: actionTypes.RATE_ARTICLE, payload: {} }).loading).toBe(false);
  });
  it('should set loading to false when RATEARTICLEERROR is dispatched', () => {
    expect(ratingArticles(initialState,
      { type: actionTypes.RATE_ARTICLE_ERROR, payload: {} }).loading).toBe(false);
  });
});
