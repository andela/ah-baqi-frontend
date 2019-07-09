import { combineReducers } from 'redux';
import modalReducer from './modals';
import loginReducer from './login';
import userProfile from './getUserProfileReducer';

export default combineReducers({
  userProfile,
  modals: modalReducer,
  login: loginReducer,
});
