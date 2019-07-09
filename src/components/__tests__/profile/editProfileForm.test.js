import React from 'react';
import { shallow } from 'enzyme';
import EditProfileForm from '../../profile/forms/EditProfileForm';

describe('<EditProfileForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditProfileForm />).dive();
  });
  test('renders without error', () => {
    expect(wrapper.find("[data-test='edit-profile-overview']")).toHaveLength(1);
  });
});
