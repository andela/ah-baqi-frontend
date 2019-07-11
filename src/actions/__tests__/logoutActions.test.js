import logoutActions from '../logoutActions';
import store from '../../utils/testUtils';

describe('logoutActions', () => {
  test('Dispatches LOG_OUT', () => {
    store.dispatch(logoutActions());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('LOG_OUT');
  });
});
