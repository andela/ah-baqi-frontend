import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { Form, Button } from 'antd';
import ResetConfirm from '../passwordConfirmContainer';

describe('Tests PasswordResetConfirmContainer', () => {
  const store = configureStore([thunk])({
    confirmresetpassword: { message: {}, errors: {} },
  });
  const props = {
    match: {
      params: {
        token: 'tcvygbuhijn6789',
      },
    },
    showModal: jest.fn(),
    history: { push: jest.fn() },
  };
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <ResetConfirm {...props} />
      </Provider>
    </Router>,
  );
  it('Test mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Tests input change in form', () => {
    const form = wrapper.find(Form, Form.Item);
    const input = form.find('input[name="password"]');
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'testuser@gmail.com',
        password: 'AseRtG9176!',
      },
    });
    expect(input.length).toEqual(1);
  });
  it('handles submit in form', () => {
    const PasswordChangeBtn = wrapper.find(Button);
    PasswordChangeBtn.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(PasswordChangeBtn.length).toEqual(1);
  });
});
