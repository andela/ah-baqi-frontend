import { combineReducers } from 'redux';
import modalReducer from './modals';
import loginReducer from './login';
import bookmarksReducer from './bookmarks';
import userProfile from './getUserProfileReducer';
import passwordResetReducer from './passwordResetReducer';
import passwordConfirmReducer from './passwordConfirmReducer';
import ratingArticles from './ratingArticles';
import articleReducer from './articleReducers';
import searchReducer from './search';

export default combineReducers({
  bookmarks: bookmarksReducer,
  userProfile,
  modals: modalReducer,
  login: loginReducer,
  passwordResetReducer,
  passwordConfirmReducer,
  rating: ratingArticles,
  article: articleReducer,
  search: searchReducer,
});
