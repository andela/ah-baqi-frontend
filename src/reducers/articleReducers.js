import actionTypes from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  articleCount: 0,
  articles: [],
  nextPage: null,
  likes: localStorage.likes,
  previousPage: null,
  followees: [],
  actionCalled: false,
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
  beenLiked: localStorage.beenLiked,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
        actionCalled: true,
        created: true,
      };
    case actionTypes.GET_ALL_ARTICLES:
      return {
        ...state,
        actionCalled: true,
        articles: action.payload.count > state.articles.length ? state.articles.concat(action.payload.results) : state.articles, // eslint-disable-line
        nextPage: action.payload.next,
        previousPage: action.payload.previous,
        articleCount: action.payload.count,
      };
    case actionTypes.GET_SINGLE_ARTICLES:
      return {
        ...state,
        articleData: { ...action.payload },
        actionCalled: true,
        getNew: true,
      };
    case actionTypes.EDIT_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
        edited: true,
        actionCalled: true,
      };
    case actionTypes.DELETE_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
        actionCalled: true,
      };
    case actionTypes.TOGGLE_LIKE:
      return {
        ...state,
        beenLiked: action.payload.article_liked,
        likes: action.payload.likes,
        actionCalled: true,
      };
    case actionTypes.FETCH_FOLLOWERS:
      return {
        ...state,
        followees: [...action.payload],
        actionCalled: true,
      };
    default:
      return state;
  }
}
