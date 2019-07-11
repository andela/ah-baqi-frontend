import React from 'react';
import { shallow } from 'enzyme';

import AuthModal from '../modals/AuthModal';


describe('<AuthModal /> component', () => {
  test('Modal renders correctly', () => {
    const wrapper = shallow(<AuthModal />);
    expect(wrapper.find("[title='Welcome to Authors Haven']")).toHaveLength(1);
  });

  test('Modal renders correctly with login options', () => {
    const wrapper = shallow(<AuthModal authAction="signup" />);
    expect(wrapper.find("[action='Signup']")).toHaveLength(2); // 2: social auth and email login
  });

  test('Modal renders correctly with signup options', () => {
    const wrapper = shallow(<AuthModal authAction="signup" />);
    expect(wrapper.find("[action='Signup']")).toHaveLength(2); // 2: social auth and email signup
  });
});
