import React from 'react';
import { shallow } from 'enzyme';

import { containerStore } from '../../utils/testUtils';
import Profile, { UnconnectedProfile } from '../profile/Profile';

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
    const getUserProfileMock = jest.fn();
    const getUserArticlesMock = jest.fn();

    const props = {
      getUserProfile: getUserProfileMock,
      getUserArticles: getUserArticlesMock,
    };
    const wrapper = shallow(<UnconnectedProfile {...props} />);
    wrapper.instance().componentDidMount();
    const getProfile = getUserProfileMock.mock.calls.length;
    const getArticles = getUserArticlesMock.mock.calls.length;

    expect(getProfile).toBe(1);
    expect(getArticles).toBe(1);
  });
});
