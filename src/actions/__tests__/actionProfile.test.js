import { instance } from '../../utils/axios';
import store from '../../utils/testUtils';
import { getUserProfile, editUserProfile } from '../profile/profile';

jest.spyOn(instance, 'get');
jest.spyOn(instance, 'patch');

describe('getUserProfile action creator', () => {
  const profile = {
    email: 'mwangi@gmail.com',
    username: 'mwangi',
    first_name: 'wangombe',
    last_name: 'boniface',
    country: 'kenya',
    bio: 'I love fish',
    image: 'https://res.cloudinary.com/wekesa931/image/upload/v1554520694/samples/bike',
  };
  const editedFields = {
    first_name: 'boloyang',
    last_name: 'wamnyonyez',
  };
  const newProfile = {
    email: 'mwangi@gmail.com',
    username: 'mwangi',
    first_name: 'boloyang',
    last_name: 'wamnyonyez',
    country: 'kenya',
    bio: 'I love fish',
    image: 'https://res.cloudinary.com/wekesa931/image/upload/v1554520694/samples/bike',
  };

  test('adds profile to state', async () => {
    instance.get.mockImplementation(() => Promise.resolve({
      data: { ...profile },
    }));

    await store.dispatch(getUserProfile());
    expect(store.getActions()[0].payload).toEqual(profile);
  });
  test('edit profile action', async () => {
    instance.patch.mockImplementation(() => Promise.resolve({
      data: { ...editedFields },
    }));
    instance.get.mockImplementation(() => Promise.resolve({
      data: { ...newProfile },
    }));

    await store.dispatch(editUserProfile('username', editedFields));
    store.dispatch(getUserProfile());
    expect(store.getActions()[2].payload).toEqual(newProfile);
  });
});
