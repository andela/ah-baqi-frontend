import { combineReducers } from 'redux';
import modalReducer from './modals';
import loginReducer from './login';
import userProfile from './getUserProfileReducer';
import passwordResetReducer from './passwordResetReducer';
import passwordConfirmReducer from './passwordConfirmReducer';
import ratingArticles from './ratingArticles';
import articleReducer from './articleReducers';

export default combineReducers({
  userProfile,
  modals: modalReducer,
  login: loginReducer,
  passwordResetReducer,
  passwordConfirmReducer,
  rating: ratingArticles,
  article: articleReducer,
});
