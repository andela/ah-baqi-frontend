import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../profile/UserProfile';

describe('<UserProfile />', () => {
  test('renders without error', () => {
    const wrapper = shallow(<UserProfile />);
    expect(wrapper.find("[data-test='user-profile-overview']")).toHaveLength(1);
  });
});
