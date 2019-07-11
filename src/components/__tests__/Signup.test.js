import React from 'react';
import { shallow } from 'enzyme';

import Signup from '../auth/Signup';

describe('<Signup/> component', () => {
  const props = { submit: jest.fn() };
  const wrapper = shallow(<Signup submit={props.submit} />);

  test('Signup form renders correctly', () => {
    expect(wrapper.dive().find("[data-test='username-input']")).toHaveLength(1);
    expect(wrapper.dive().find("[data-test='password-input']")).toHaveLength(1);
  });

  test('mock form submit', () => {
    const form = wrapper.dive().find('Form');
    form.simulate('submit');
    const SignupSpy = jest.spyOn(wrapper.instance().props, 'submit');
    expect(SignupSpy).toHaveBeenCalled();
  });
});
