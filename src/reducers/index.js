import { combineReducers } from 'redux';
import modalReducer from './modals';
import loginReducer from './login';

export default combineReducers({
  modals: modalReducer,
  login: loginReducer,
});
