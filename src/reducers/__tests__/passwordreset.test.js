import passwordResetReducer from '../passwordResetReducer';
import actionTypes from '../../actions/types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

describe('Fetch reset password link', () => {
  it('should have the initial state', () => {
    expect(passwordResetReducer(initialState, {})).toEqual({
      data: {},
      error: null,
      loading: false,
    });
  });
  it('should show loading when RESETPASSWORDREQUEST is dispatched', () => {
    expect(passwordResetReducer(initialState,
      { type: actionTypes.RESETPASSWORDREQUEST }).loading).toBe(true);
  });
  it('should set loading to false when RESETPASSWORDLINK is dispatched', () => {
    expect(passwordResetReducer(initialState,
      { type: actionTypes.RESETPASSWORDLINK, payload: {} }).loading).toBe(false);
  });
  it('should set loading to false when RESETPASSWORDLINKERROR is dispatched', () => {
    expect(passwordResetReducer(initialState,
      { type: actionTypes.RESETPASSWORDLINKERROR, payload: {} }).loading).toBe(false);
  });
});
