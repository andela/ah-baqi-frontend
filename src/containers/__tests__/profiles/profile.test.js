import React from 'react';
import { shallow } from 'enzyme';

import { containerStore, mockFn } from '../../../utils/testUtils';
import Profile, { UnconnectedProfile } from '../../profile/Profile';

const setup = () => {
  const store = containerStore();
  const wrapper = shallow(
    <Profile store={store} />,
  ).dive().dive();
  return wrapper;
};

describe('redux properties', () => {
  test('is undefined in the first instance before action is called', () => {
    const wrapper = setup();
    const initialProfile = wrapper.instance().props.profile;
    expect(initialProfile).toBe(undefined);
  });
  test('`getUserProfile` action creator is a function on the props', () => {
    const wrapper = setup();
    const getUserProfileProp = wrapper.instance().props.getUserProfile;
    expect(getUserProfileProp).toBeInstanceOf(Function);
  });
  test('`getUserProfile` runs on Profile mount', () => {
    const props = {
      getUserProfile: mockFn,
      getUserArticles: mockFn,
    };
    const wrapper = shallow(<UnconnectedProfile {...props} />);
    wrapper.instance().componentDidMount();
    const getProfile = mockFn.mock.calls.length;
    const getArticles = mockFn.mock.calls.length;

    expect(getProfile).toBe(2);
    expect(getArticles).toBe(2);
  });
});
