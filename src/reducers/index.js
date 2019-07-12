import { combineReducers } from 'redux';
import modalReducer from './modals';
import loginReducer from './login';
import userProfile from './getUserProfileReducer';
import passwordResetReducer from './passwordResetReducer';
import passwordConfirmReducer from './passwordConfirmReducer';

export default combineReducers({
  userProfile,
  modals: modalReducer,
  login: loginReducer,
  passwordResetReducer,
  passwordConfirmReducer,
});
