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
import PasswordResetContainer from '../passwordResetContainer';
import { mockFn, hasElement } from '../../../utils/testUtils';

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
    showModal: mockFn,
    history: { push: mockFn },
  };
  const history = createBrowserHistory();

  const makeWrapper = Element => mount(
    <Router history={history}>
      <Provider store={store}>
        <Element {...props} />
      </Provider>
    </Router>,
  );
  const confWrapper = makeWrapper(ResetConfirm);
  const resetWrapper = makeWrapper(PasswordResetContainer);

  it('Test mounting of component', () => {
    expect(toJson(confWrapper)).toMatchSnapshot();
    expect(toJson(resetWrapper)).toMatchSnapshot();
  });
  it('Tests input change in confirm form', () => {
    const form = confWrapper.find(Form, Form.Item);
    const input = form.find('input[name="password"]');
    input.simulate('change', {
      preventDefault: mockFn,
      target: {
        value: 'testuser@gmail.com',
        password: 'AseRtG9176!',
      },
    });
    expect(input.length).toEqual(1);
  });

  it('Tests input change in reset form', () => {
    const resetBtn = resetWrapper.findWhere(n => n.type() === Button && n.contains('Send Reset Password Email'));
    resetBtn.simulate('click', {
      preventDefault: mockFn,
    });
    const form = resetWrapper.find(Form);
    const input = form.find(Form.Item).at(0);
    input.simulate('change', {
      preventDefault: mockFn,
      target: {
        value: 'testuser@gmail.com',
        name: 'email',
      },
    });
    expect(input.length).toEqual(1);
  });

  it('handles submit in form', () => {
    const submitButton = hasElement(confWrapper, Button);
    expect(submitButton.length).toBe(1);
  });

  it('Tests input change in form', () => {
    const form = resetWrapper.find(Form, Form.Item);
    const input = form.find('[data-test="email"]').at(0);
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'testuser@gmail.com',
      },
    });
    expect(input.length).toEqual(1);
  });
  it('handles submit event', () => {
    const resetBtn = resetWrapper.findWhere(n => n.type() === Button && n.contains('Send Reset Password Email'));
    resetBtn.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(resetBtn.length).toEqual(1);
  });
});
