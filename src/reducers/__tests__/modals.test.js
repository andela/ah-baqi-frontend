import actionTypes from '../../actions/types';
import modalsReducer from '../modals';

describe('modalsReducer', () => {
  let initialState;
  beforeAll(() => {
    initialState = {
      visible: false,
      authAction: '',
      email: '',
      error: null,
      isLoggedIn: false,
    };
  });
  test('modalsReducer returns initialState by default', () => {
    const newState = modalsReducer(initialState, { type: 'default' });
    expect(newState).toBe(initialState);
  });
  test('DISPLAY_MODAL action returns visible:true', () => {
    const newState = modalsReducer(initialState, { type: actionTypes.DISPLAY_MODAL });
    expect(newState.visible).toBe(true);
  });
  test('HIDE_MODAL action returns visible:false', () => {
    const newState = modalsReducer(initialState, { type: actionTypes.HIDE_MODAL });
    expect(newState.visible).toBe(false);
  });
  test('EMAIL_SIGNUP action returns authAction:signup', () => {
    const newState = modalsReducer(initialState, { type: actionTypes.EMAIL_SIGNUP });
    expect(newState.authAction).toBe('signup');
  });
  test('EMAIL_LOGIN action returns authAction:login', () => {
    const newState = modalsReducer(initialState, { type: actionTypes.EMAIL_LOGIN });
    expect(newState.authAction).toBe('login');
  });
  test('EMAIL_LOGIN_FORM action returns authAction:loginForm', () => {
    const newState = modalsReducer(initialState, { type: actionTypes.EMAIL_LOGIN_FORM });
    expect(newState.authAction).toBe('loginForm');
  });
  test('EMAIL_SIGNUP_FORM action returns authAction:signupForm', () => {
    const newState = modalsReducer(initialState, { type: actionTypes.EMAIL_SIGNUP_FORM });
    expect(newState.authAction).toBe('signupForm');
  });
});
