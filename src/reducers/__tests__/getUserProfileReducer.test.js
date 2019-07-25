import actionTypes from '../../actions/types';
import getUserProfileReducer from '../getUserProfileReducer';

describe('getUserProfileReducer', () => {
  test('getUserProfileReducer returns initialState by default', () => {
    const newState = getUserProfileReducer({}, { type: 'default' });
    expect(newState).toEqual({});
  });
  test('FETCH_USER_ARTICLES', () => {
    const newState = getUserProfileReducer({}, { type: actionTypes.FETCH_USER_ARTICLES });
    expect(newState.articlesFetched).toBe(true);
  });
  test('USER_PROFILE', () => {
    const newState = getUserProfileReducer({}, { type: actionTypes.USER_PROFILE });
    expect(newState.actionCalled).toBe(true);
  });
});
