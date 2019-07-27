import React from 'react';
import { shallow } from 'enzyme';

import { componentRenders, propsOnActionSpy } from '../../../utils/testUtils';
import Signup from '../../auth/Signup';
import Login from '../../auth/Login';

describe('<Signup/> and <Login /> component', () => {
  const props = { submit: jest.fn() };
  const signupWrapper = shallow(<Signup submit={props.submit} />);
  const loginWrapper = shallow(<Login submit={props.submit} />);

  test('forms renders correctly', () => {
    componentRenders(signupWrapper.dive(), 'signup-form');
    componentRenders(loginWrapper.dive(), 'login-form');
  });

  test('mock form submit', () => {
    propsOnActionSpy(signupWrapper, 'Form', 'submit');
    propsOnActionSpy(loginWrapper, 'Form', 'submit');
  });
});
