import React from 'react';
import { shallow } from 'enzyme';

import AuthModal from '../../modals/AuthModal';


describe('<AuthModal /> component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<AuthModal />);
    expect(wrapper.find("[data-test='email-button-test']")).toHaveLength(1);
  });

  test('Modal renders correctly with login options', () => {
    const wrapper = shallow(<AuthModal authAction="login" />);
    expect(wrapper.find("[action='Login']")).toHaveLength(2); // 2: social auth and email login
  });

  test('Modal renders correctly with signup options', () => {
    const wrapper = shallow(<AuthModal authAction="signup" />);
    expect(wrapper.find("[action='Signup']")).toHaveLength(2); // 2: social auth and email signup
  });

  test('Modal renders correctly with login form', () => {
    const wrapper = shallow(<AuthModal authAction="loginForm" />);
    expect(wrapper.find("[form-data='login form']")).toHaveLength(1);
  });

  test('Modal renders correctly with login form', () => {
    const wrapper = shallow(<AuthModal authAction="signupForm" />);
    expect(wrapper.find("[form-data='signup form']")).toHaveLength(1);
  });
});
