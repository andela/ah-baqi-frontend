import passwordConfirmReducer from '../passwordConfirmReducer';
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
  it('should show loading when RESETCONFIRMREQUEST is dispatched', () => {
    expect(passwordConfirmReducer(initialState,
      { type: actionTypes.RESETCONFIRMREQUEST }).loading).toBe(true);
  });
  it('should set loading to false when RESETCOFIRMSUCCESS is dispatched', () => {
    expect(passwordConfirmReducer(initialState,
      { type: actionTypes.RESETCOFIRMSUCCESS, payload: {} }).loading).toBe(false);
  });
  it('should set loading to false when RESETCONFIRMERROR is dispatched', () => {
    expect(passwordConfirmReducer(initialState,
      { type: actionTypes.RESETCONFIRMERROR, payload: {} }).loading).toBe(false);
  });
});
