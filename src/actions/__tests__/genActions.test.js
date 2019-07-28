import store, {
  passwordResetConfTestsPass, passwordResetConfTestsFail, rejectPromiseTest,
  testDispatchWithPayload, instanceMocks,
} from '../../utils/testUtils';
import {
  getBookmarks,
  addBookmark,
  removeBookmark,
} from '../bookmarks';
import logoutActions from '../logoutActions';
import loginActions from '../loginActions';
import {
  emailSignupAction,
  emailLoginAction,
  formSignupAction,
  formLoginAction,
  hideModalActions,
  displayModalActions,
} from '../modalActions';
import {
  resetPasswordRequest, resetPassword, resetPasswordError, resetPasswordActions,
} from '../passwordResetActions';
import {
  resetConfirmRequest, resetConfirmSuccess, resetConfirmError, resetConfirmActions,
} from '../passwordConfirmActions';

describe('testing firebse calls from twitter', () => {
  beforeEach(() => {
    store.clearActions();
  });

  testDispatchWithPayload(store, displayModalActions, 'DISPLAY_MODAL');
  testDispatchWithPayload(store, hideModalActions, 'HIDE_MODAL');
  testDispatchWithPayload(store, emailSignupAction, 'EMAIL_SIGNUP');
  testDispatchWithPayload(store, emailLoginAction, 'EMAIL_LOGIN');
  testDispatchWithPayload(store, formSignupAction, 'EMAIL_SIGNUP_FORM');
  testDispatchWithPayload(store, formLoginAction, 'EMAIL_LOGIN_FORM');
});

describe('should test login and logout Action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  testDispatchWithPayload(store, logoutActions, 'LOG_OUT', localStorage.removeItem);
  testDispatchWithPayload(store, loginActions, 'LOG_IN', localStorage.setItem);
});

describe('bookmark actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  testDispatchWithPayload(store, addBookmark, 'GET_ALL_BOOKMARKS');
  testDispatchWithPayload(store, getBookmarks, 'GET_ALL_BOOKMARKS');
  testDispatchWithPayload(store, removeBookmark, 'GET_ALL_BOOKMARKS');

  rejectPromiseTest('post', addBookmark, 'addBookmark', 'my_article', undefined);
  rejectPromiseTest('delete', removeBookmark, 'removeBookmark', 'my_article', undefined);
  rejectPromiseTest('get', getBookmarks, 'getBookmarks', {}, undefined);
});

describe('Request reset and confirm password actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  testDispatchWithPayload(store, resetPasswordRequest, 'RESETPASSWORDREQUEST');
  testDispatchWithPayload(store, resetPassword, 'RESETPASSWORDLINK');
  testDispatchWithPayload(store, resetPasswordError, 'RESETPASSWORDLINKERROR');
  testDispatchWithPayload(store, resetConfirmRequest, 'RESETCONFIRMREQUEST');
  testDispatchWithPayload(store, resetConfirmSuccess, 'RESETCOFIRMSUCCESS');
  testDispatchWithPayload(store, resetConfirmError, 'RESETCONFIRMERROR');

  const resetData = {
    password: 'Test@me01',
    reset_password: 'test@me01',
  };

  const confData = {
    resetPassword: {
      password: 'dummypass1',
      confirm_password: 'dummypass1',
    },
    data: {
      message: 'success',
    },
  };

  passwordResetConfTestsPass(resetData, 'RESETPASSWORDREQUEST', resetPasswordActions, 'resetPasswordActions');

  test('should test resetConfirmActions', async () => {
    instanceMocks('post', confData);
    await store.dispatch(resetConfirmActions(confData));
    expect(store.getActions()[0].type).toEqual('RESETCONFIRMREQUEST');
  });

  passwordResetConfTestsFail(resetData, 'RESETPASSWORDREQUEST', resetPasswordActions, 'resetPasswordActions');
  passwordResetConfTestsFail(resetData, 'RESETCONFIRMERROR', resetConfirmActions, 'resetConfirmActions');
});
