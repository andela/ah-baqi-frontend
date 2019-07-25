import searchActions from '../searchActions';
import store from '../../utils/testUtils';

describe('searchActions', () => {
  test('Dispatches SEARCH', async () => {
    const actions = store.getActions();
    await store.dispatch(searchActions('test-filter', 'test-phrase', null));
    expect(actions[0].type).toEqual('SEARCH');
  });
});
