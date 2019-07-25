import { instance } from '../../utils/axios';
import store from '../../utils/testUtils';
import {
  fetchFollowees, fetchFollowers, followUser, unfollowUser,
} from '../followingActions';

jest.spyOn(instance, 'post');
jest.spyOn(instance, 'get');

describe('follow actions', () => {
  test('followUser action is called', async () => {
    instance.post.mockImplementation(() => Promise.resolve({

    }));

    await store.dispatch(followUser('1'));
    expect(instance.post).toHaveBeenCalledWith('profiles/1/follow/');
  });
  test('unfollowUser action is called', async () => {
    instance.delete.mockImplementation(() => Promise.resolve({

    }));

    await store.dispatch(unfollowUser('1'));
    expect(instance.delete).toHaveBeenCalledWith('profiles/1/unfollow/');
  });
  test('fetchfollowers action is called', async () => {
    instance.get.mockImplementation(() => Promise.resolve({

    }));

    await store.dispatch(fetchFollowers('1'));
    expect(instance.get).toHaveBeenCalledWith('profiles/1/followers/');
  });
  test('fetchfollowees action is called', async () => {
    instance.get.mockImplementation(() => Promise.resolve({

    }));

    await store.dispatch(fetchFollowees('1'));
    expect(instance.get).toHaveBeenCalledWith('profiles/1/following/');
  });
});
