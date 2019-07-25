import actionTypes from '../../actions/types';
import searchReducer from '../search';

describe('searchReducer', () => {
  test('searchReducer returns { by default', () => {
    const newState = searchReducer({}, { type: 'default' });
    expect(newState).toMatchObject({});
  });
  test('SEARCH actionType returns results', () => {
    const newState = searchReducer({}, { type: actionTypes.SEARCH });
    expect(newState.resultsReturned).toBe(true);
  });
});
