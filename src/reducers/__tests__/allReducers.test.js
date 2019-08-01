import actionTypes from '../../actions/types';
import articleReducer, { initialState as articleInitState } from '../articleReducers';
import modalsReducer, { initialState as modalInitialState } from '../modals';
import loginReducer, { initialState as logininitialState } from '../login';
import passwordConfirmReducer, { initialState as passInitState } from '../passwordConfirmReducer';
import passwordResetReducer from '../passwordResetReducer';
import getUserProfileReducer from '../getUserProfileReducer';
import ratingArticles from '../ratingArticles';
import searchReducer from '../search';
import bookmarksReducer from '../bookmarks';
import { reducerTest } from '../../utils/testUtils';

describe('articleReducer', () => {
  let articleData;
  beforeAll(() => {
    articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
    };
  });

  reducerTest('default', articleReducer, {}, articleInitState);
  reducerTest(actionTypes.CREATE_ARTICLE, articleReducer, {}, articleInitState);
  reducerTest(actionTypes.GET_SINGLE_ARTICLES, articleReducer, {}, articleInitState);
  reducerTest(actionTypes.EDIT_ARTICLE, articleReducer, {}, articleInitState);
  reducerTest(actionTypes.DELETE_ARTICLE, articleReducer, {}, articleInitState);
  reducerTest(actionTypes.FETCH_FOLLOWERS, articleReducer, ['fol1', 'fol2'], articleInitState);
  reducerTest(actionTypes.GET_ALL_ARTICLES, articleReducer, {
    results: [articleData],
    count: 5,
    followees: ['number1', 'number2'],
  }, articleInitState);
  reducerTest(actionTypes.TOGGLE_LIKE, articleReducer, {
    article_liked: false,
    likes: 1000,
  }, articleInitState);
});

describe('modalsReducer', () => {
  reducerTest(actionTypes.DISPLAY_MODAL, modalsReducer, {}, modalInitialState);
  reducerTest(actionTypes.HIDE_MODAL, modalsReducer, {}, modalInitialState);
  reducerTest(actionTypes.EMAIL_SIGNUP_FORM, modalsReducer, {}, modalInitialState);
  reducerTest('unknownConstant', modalsReducer, {}, modalInitialState);
  reducerTest(actionTypes.EMAIL_SIGNUP, modalsReducer, {}, modalInitialState);
  reducerTest(actionTypes.EMAIL_LOGIN, modalsReducer, {}, modalInitialState);
  reducerTest(actionTypes.EMAIL_LOGIN_FORM, modalsReducer, {}, modalInitialState);
});

describe('loginReducer', () => {
  reducerTest(actionTypes.GOOGLE_AUTH, loginReducer, {}, logininitialState);
  reducerTest(actionTypes.FACEBOOK_AUTH, loginReducer, {}, logininitialState);
  reducerTest('loginReduceDef', modalsReducer, {}, logininitialState);
  reducerTest(actionTypes.TWITTER_AUTH, loginReducer, {}, logininitialState);
  reducerTest(actionTypes.LOG_IN, loginReducer, {}, logininitialState);
  reducerTest(actionTypes.LOG_OUT, loginReducer, {}, logininitialState);
});

describe('Test password confirm and reset', () => {
  reducerTest('Reset', passwordConfirmReducer, {}, passInitState);
  reducerTest('Confirm', passwordConfirmReducer, {}, passInitState);
  reducerTest(actionTypes.RESETCONFIRMREQUEST, passwordConfirmReducer, {}, passInitState);
  reducerTest(actionTypes.RESETPASSWORDREQUEST, passwordResetReducer, {}, passInitState);
  reducerTest(actionTypes.RESETCOFIRMSUCCESS, passwordConfirmReducer, {}, passInitState);
  reducerTest(actionTypes.RESETPASSWORDLINK, passwordResetReducer, {}, passInitState);
  reducerTest(actionTypes.RESETCONFIRMERROR, passwordConfirmReducer, {}, passInitState);
  reducerTest(actionTypes.RESETPASSWORDLINKERROR, passwordResetReducer, {}, passInitState);
});

describe('user profile reducers', () => {
  reducerTest('getProfileDefault', getUserProfileReducer, {}, {});
  reducerTest(actionTypes.USER_PROFILE, getUserProfileReducer, {}, passInitState);
  reducerTest(actionTypes.FETCH_USER_ARTICLES, getUserProfileReducer, {}, passInitState);
});

describe('Fetch rate articles link', () => {
  reducerTest('rateDefault', ratingArticles, {}, passInitState);
  reducerTest(actionTypes.RATE_ARTICLE, ratingArticles, {}, passInitState);
  reducerTest(actionTypes.RATE_ARTICLE_ERROR, ratingArticles, {}, passInitState);
});

describe('searchReducer', () => {
  reducerTest('searchDefault', searchReducer, {}, {});
  reducerTest(actionTypes.SEARCH, searchReducer, {}, {});
});

describe('bookmark reducer', () => {
  reducerTest('bookmarksDef', bookmarksReducer, {}, {});
  reducerTest(actionTypes.GET_ALL_BOOKMARKS, bookmarksReducer, {}, { bookmarks: {} });
});
