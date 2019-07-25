import React from 'react';
import { shallow } from 'enzyme';

import ProfileHead from '../../profile/ProfileHeader';
import { mockFn } from '../../../utils/testUtils';

const myProfile = {
  profile: {
    first_name: 'first',
    last_name: 'last',
    image: 'image_url_from_prof',
  },
};

const wrapper = shallow(<ProfileHead myProfile={myProfile} editProfile={mockFn} />);

describe('The <ProfileHead /> component', () => {
  test('should test ProfileHead renders', () => {
    expect(wrapper.length).toEqual(1);
  });
});
