import store, { instanceMocks } from '../../utils/testUtils';
import {
  fetchFollowees, fetchFollowers, followUser, unfollowUser,
} from '../followingActions';

describe('follow actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('followUser action is called', async () => {
    instanceMocks('post', {});
    await store.dispatch(followUser('1'));
    expect(store.getActions()[0].type).toEqual('FOLLOW_USER');
  });
  test('unfollowUser action is called', async () => {
    instanceMocks('delete', {});
    await store.dispatch(unfollowUser('1'));
    expect(store.getActions()[0].type).toEqual('UNFOLLOW_USER');
  });
  test('fetchfollowers action is called', async () => {
    instanceMocks('get', {});
    await store.dispatch(fetchFollowers('1'));
    expect(store.getActions()[0].type).toEqual('FETCH_FOLLOWERS');
  });
  test('fetchfollowees action is called', async () => {
    instanceMocks('get', {});
    await store.dispatch(fetchFollowees('1'));
    expect(store.getActions()[0].type).toEqual('FETCH_FOLLOWERS');
  });
});
