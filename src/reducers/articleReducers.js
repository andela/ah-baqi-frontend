import actionTypes from '../actions/types';

const initialState = {
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

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
        created: true,
      };
    case actionTypes.GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.payload.results,
        nextPage: action.payload.next,
        previousPage: action.payload.previous,
        articleCount: action.payload.count,
      };
    case actionTypes.GET_SINGLE_ARTICLES:
      return {
        ...state,
        articleData: { ...action.payload },
        getNew: true,
      };
    case actionTypes.EDIT_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
        edited: true,
      };
    default:
      return state;
  }
}
