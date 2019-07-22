import actionTypes from '../../actions/types';
import loginReducer from '../login';

describe('loginReducer', () => {
  let initialState;
  beforeAll(() => {
    initialState = {
      loading: false,
      error: null,
      isLoggedIn: false,
    };
  });
  test('loginReducer returns initialState by default', () => {
    const newState = loginReducer(initialState, { type: 'default' });
    expect(newState).toBe(initialState);
  });
  test('GOOGLE_AUTH action returns isLoggedIn:true', () => {
    const newState = loginReducer(initialState, { type: actionTypes.GOOGLE_AUTH });
    expect(newState.isLoggedIn).toBe(true);
  });
  test('FACEBOOK_AUTH action returns isLoggedIn:true', () => {
    const newState = loginReducer(initialState, { type: actionTypes.FACEBOOK_AUTH });
    expect(newState.isLoggedIn).toBe(true);
  });
  test('TWITTER_AUTH action returns isLoggedIn:true', () => {
    const newState = loginReducer(initialState, { type: actionTypes.TWITTER_AUTH });
    expect(newState.isLoggedIn).toBe(true);
  });
  test('LOG_IN action returns isLoggedIn:true', () => {
    const newState = loginReducer(initialState, { type: actionTypes.LOG_IN });
    expect(newState.isLoggedIn).toBe(true);
  });
  test('LOG_OUT action returns isLoggedIn:false', () => {
    const newState = loginReducer(initialState, { type: actionTypes.LOG_OUT });
    expect(newState.isLoggedIn).toBe(false);
  });
});
