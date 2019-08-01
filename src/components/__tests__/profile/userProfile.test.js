import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../profile/UserProfile';

describe('<UserProfile />', () => {
  let wrapper;
  test('renders without error wit no profile', () => {
    wrapper = shallow(<UserProfile />);
    expect(wrapper.find("[data-test='user-profile-overview']")).toHaveLength(1);
  });
});
