import actionTypes from '../../actions/types';
import articleReducer from '../articleReducers';

describe('articleReducer', () => {
  let initialState;
  let articleData;
  let payload;
  beforeAll(() => {
    initialState = {
      loading: false,
      error: null,
      articleCount: 0,
      articles: [],
      followees: [],
      nextPage: null,
      previousPage: null,
      beenLiked: false,
      articleData: {
        id: 0,
        reads: 0,
        views: '',
        author: '',
        slug: '',
        image: '',
        readingTime: '',
        likePopularity: '',
        description: '',
        rating: 0,
        comments: [],
        dislikes: 0,
        tagList: [],
        title: '',
        body: '',
        likes: 0,
      },
    };
    articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
    };

    payload = {
      results: [articleData],
      count: 5,
      followees: ['number1', 'number2'],
    };
  });
  test('articleReducer returns initialState by default', () => {
    const newState = articleReducer(initialState, { type: 'default' });
    expect(newState).toBe(initialState);
  });
  test('CREATE_ARTICLE action returns created:true', () => {
    const newState = articleReducer(initialState, { type: actionTypes.CREATE_ARTICLE });
    expect(newState.created).toBe(true);
  });
  test('GET_SINGLE_ARTICLES action returns getNew:true', () => {
    const newState = articleReducer(initialState, { type: actionTypes.GET_SINGLE_ARTICLES });
    expect(newState.getNew).toBe(true);
  });
  test('EDIT_ARTICLE action returns edited:true', () => {
    const newState = articleReducer(initialState, { type: actionTypes.EDIT_ARTICLE });
    expect(newState.edited).toBe(true);
  });
  test('DELETE_ARTICLE action returns actionCalled:true', () => {
    const newState = articleReducer(initialState, { type: actionTypes.DELETE_ARTICLE });
    expect(newState.actionCalled).toBe(true);
  });
  test('TOGGLE_LIKE action returns actionCalled:true', () => {
    const newState = articleReducer(initialState, {
      type: actionTypes.TOGGLE_LIKE,
      payload: {
        article_liked: false,
        likes: 1000,
      },
    });
    expect(newState.actionCalled).toBe(true);
  });
  test('EDIT_ARTICLE action returns edited:true', () => {
    const newState = articleReducer(initialState, {
      type: actionTypes.FETCH_FOLLOWERS, payload: ['fol1', 'fol2'],
    });
    expect(newState.actionCalled).toBe(true);
  });
  test('GET_ALL_ARTICLES action returns created:true', () => {
    const newState = articleReducer(initialState, { type: 'GET_ALL_ARTICLES', payload });
    expect(newState.articles).toEqual([articleData]);
  });
});
