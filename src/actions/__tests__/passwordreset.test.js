import {
  resetPasswordRequest, resetPassword, resetPasswordError,
} from '../passwordResetActions';
import actionTypes from '../types';

const data = {
  password: 'Test@me01',
  reset_password: 'test@me01',
};

describe('Request reset password actions', () => {
  it('should create an action to start resetting process', () => {
    const expectedAction = {
      type: actionTypes.RESETPASSWORDREQUEST,
    };
    expect(resetPasswordRequest(data)).toEqual(expectedAction);
  });
  it('should create an action to send reset link', () => {
    const expectedAction = {
      type: actionTypes.RESETPASSWORDLINK,
      data,
    };
    expect(resetPassword(data)).toEqual(expectedAction);
  });
  it('should create an action to indicate error failure', () => {
    const expectedAction = {
      type: actionTypes.RESETPASSWORDLINKERROR,
      error: data,
    };
    expect(resetPasswordError(data)).toEqual(expectedAction);
  });
});
