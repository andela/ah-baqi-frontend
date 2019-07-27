import passwordConfirmReducer from '../passwordConfirmReducer';
import passwordResetReducer from '../passwordResetReducer';
import actionTypes from '../../actions/types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

describe('Test fetch confirm password link', () => {
  it('should have the first state', () => {
    expect(passwordConfirmReducer(initialState, {})).toEqual({
      data: {},
      error: null,
      loading: false,
    });
  });
  it('should have the initial state', () => {
    expect(passwordResetReducer(initialState, {})).toEqual({
      data: {},
      error: null,
      loading: false,
    });
  });
  it('should show loading when RESETCONFIRMREQUEST is dispatched', () => {
    expect(passwordConfirmReducer(initialState,
      { type: actionTypes.RESETCONFIRMREQUEST }).loading).toBe(true);
    expect(passwordResetReducer(initialState,
      { type: actionTypes.RESETPASSWORDREQUEST }).loading).toBe(true);
  });
  it('should set loading to false when dispatched', () => {
    expect(passwordConfirmReducer(initialState,
      { type: actionTypes.RESETCOFIRMSUCCESS, payload: {} }).loading).toBe(false);
    expect(passwordResetReducer(initialState,
      { type: actionTypes.RESETPASSWORDLINK, payload: {} }).loading).toBe(false);
  });
  it('should set loading to false when RESETCONFIRMERROR is dispatched', () => {
    expect(passwordConfirmReducer(initialState,
      { type: actionTypes.RESETCONFIRMERROR, payload: {} }).loading).toBe(false);
    expect(passwordResetReducer(initialState,
      { type: actionTypes.RESETPASSWORDLINKERROR, payload: {} }).loading).toBe(false);
  });
});
