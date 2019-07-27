import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { Form, Button } from 'antd';
import PasswordReset from '../passwordResetContainer';

describe('Tests PasswordResetContainer', () => {
  const store = configureStore([thunk])({
    resetpasswordlink: { message: {}, errors: {} },
  });
  const history = createBrowserHistory();
  const props = {
    showModal: jest.fn(),
  };
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <PasswordReset {...props} />
      </Provider>
    </Router>,
  );
  it('Tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Tests input change in form', () => {
    const resetBtn = wrapper.findWhere(n => n.type() === Button && n.contains('Send Reset Password Email'));
    resetBtn.simulate('click', {
      preventDefault: jest.fn(),
    });
    const form = wrapper.find(Form);
    const input = form.find(Form.Item).at(0);
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'testuser@gmail.com',
        name: 'email',
      },
    });
    expect(input.length).toEqual(1);
  });
  it('Tests input change in form', () => {
    const form = wrapper.find(Form, Form.Item);
    const input = form.find('[data-test="email"]').at(0);
    console.log(input.debug())
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'testuser@gmail.com',
      },
    });
    expect(input.length).toEqual(1);
  });
  it('handles submit event', () => {
    const resetBtn = wrapper.findWhere(n => n.type() === Button && n.contains('Send Reset Password Email'));
    resetBtn.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(resetBtn.length).toEqual(1);
  });
});
