import loginActions from '../loginActions';
import store from '../../utils/testUtils';

describe('loginActions', () => {
  test('Dispatches LOG_IN', async () => {
    const userData = {
      email: 'testemail',
      password: 'testpass',
    };
    await store.dispatch(loginActions(userData));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('LOG_IN');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
