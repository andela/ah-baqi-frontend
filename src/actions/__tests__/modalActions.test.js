import store from '../../utils/testUtils';

import {
  emailSignupAction,
  emailLoginAction,
  formSignupAction,
  formLoginAction,
  hideModalActions,
  displayModalActions,
} from '../modalActions';

describe('testing firebse calls from twitter', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('show modal', async () => {
    await store.dispatch(displayModalActions());
    expect(store.getActions()[0].type).toEqual('DISPLAY_MODAL');
  });

  test('hide modal', async () => {
    await store.dispatch(hideModalActions());
    expect(store.getActions()[0].type).toEqual('HIDE_MODAL');
  });

  test('modal displays signup buttons', async () => {
    await store.dispatch(emailSignupAction());
    expect(store.getActions()[0].type).toEqual('EMAIL_SIGNUP');
  });

  test('modal displays login buttons', async () => {
    await store.dispatch(emailLoginAction());
    expect(store.getActions()[0].type).toEqual('EMAIL_LOGIN');
  });

  test('modal switches to signup form on click', async () => {
    await store.dispatch(formSignupAction());
    expect(store.getActions()[0].type).toEqual('EMAIL_SIGNUP_FORM');
  });

  test('modal switches to login form on click', async () => {
    await store.dispatch(formLoginAction());
    expect(store.getActions()[0].type).toEqual('EMAIL_LOGIN_FORM');
  });
});
