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
      nextPage: null,
      previousPage: null,
      articleData: {
        id: 0,
        title: '',
        description: '',
        body: '',
        tagList: [],
        author: '',
        slug: '',
        readingTime: '',
        reads: 0,
        views: '',
        image: '',
        comments: [],
        rating: 0,
        likePopularity: '',
        dislikes: 0,
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
  test('GET_ALL_ARTICLES action returns created:true', () => {
    const newState = articleReducer(initialState, { type: 'GET_ALL_ARTICLES', payload });
    expect(newState.articles).toEqual([articleData]);
  });
});
