import {
  resetConfirmRequest, resetConfirmSuccess, resetConfirmError, resetConfirmActions,
} from '../passwordConfirmActions';
import actionTypes from '../types';
import store from '../../utils/testUtils';
import { instance } from '../../utils/axios';

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
  test('should fail', () => {
    instance.post.mockImplementation(() => Promise.reject({}));
    store.dispatch(resetConfirmActions(data))
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual('RESETCONFIRMERROR');
      });
  });
});
