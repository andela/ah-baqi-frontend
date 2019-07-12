import { resetConfirmRequest, resetConfirmSuccess, resetConfirmError } from '../passwordConfirmActions';
import actionTypes from '../types';

const data = {
  email: 'testmail@gmail.com',
};

describe('Reset confirm actions', () => {
  it('should create an action to start reset password', () => {
    const expectedAction = {
      type: actionTypes.RESETCONFIRMREQUEST,
    };
    expect(resetConfirmRequest(data)).toEqual(expectedAction);
  });
  it('should create an action to confirm reset password', () => {
    const expectedAction = {
      type: actionTypes.RESETCOFIRMSUCCESS,
      data,
    };
    expect(resetConfirmSuccess(data)).toEqual(expectedAction);
  });
  it('should create an action to indicate error confirm reset password', () => {
    const expectedAction = {
      type: actionTypes.RESETCONFIRMERROR,
      error: data,
    };
    expect(resetConfirmError(data)).toEqual(expectedAction);
  });
});
