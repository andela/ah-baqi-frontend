import signupActions from '../signupActions';
import actionTypes from '../types';
import store from '../../utils/testUtils';


describe('signinActions', () => {
  const signupData = {
    username: 'ruqoyah',
    email: 'rukayat@gmail.com',
    password: 'oriyomi123',
  };
  beforeEach(() => {
    store.clearActions();
  });

  test('Dispatch EMAIL_SIGNUP_REQUEST', async () => {
    await store.dispatch(signupActions(signupData));
    const actions = store.getActions();
    expect(actions[0].type).toEqual(actionTypes.EMAIL_SIGNUP_REQUEST);
  });

  test('Update local storage with email', () => {
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});