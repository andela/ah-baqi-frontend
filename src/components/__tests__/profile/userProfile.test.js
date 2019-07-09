import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../profile/UserProfile';

describe('<UserProfile />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserProfile />);
  });
  test('renders without error', () => {
    expect(wrapper.find("[data-test='user-profile-overview']")).toHaveLength(1);
  });
});
