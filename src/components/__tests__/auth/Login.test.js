import React from 'react';
import { shallow } from 'enzyme';

import Login from '../../auth/Login';

describe('<Login /> component', () => {
  const props = { submit: jest.fn() };
  const wrapper = shallow(<Login submit={props.submit} />);

  test('Login form renders correctly', () => {
    expect(wrapper.dive().find("[data-test='username-input']")).toHaveLength(1);
    expect(wrapper.dive().find("[data-test='password-input']")).toHaveLength(1);
  });

  test('mock form submit', () => {
    const form = wrapper.dive().find('Form');
    form.simulate('submit');
    const LoginSpy = jest.spyOn(wrapper.instance().props, 'submit');
    expect(LoginSpy).toHaveBeenCalled();
  });
});
