import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import ResetConfirm from '../passwordConfirmContainer';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<ResetConfirm />', () => {
  const store = configureStoreItem();
  test('It renders correctly', () => {
    const wrapperComponent = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ResetConfirm />
        </BrowserRouter>
      </Provider>,
    );
    const formItem = wrapperComponent.find(
      '[data-test="reset-form-cont"]',
    );
    expect(formItem).toHaveLength(2);

    const event = {
      target: { name: 'password', value: 'Whf34@jfFFdjkv34%#' },
      preventDefault: jest.fn(),
    };
    formItem.at(0).props().onSubmit(event);
    const pass = wrapperComponent.find(
      '[data-test="reset-form-cont-password"]',
    );
    pass.at(0).props().onChange(event);
    expect(pass).toHaveLength(2);

    const callback = jest.fn();
    pass.at(0).props()['data-__meta'].rules[1].validator.validator(
      'rule', 'Whf34@jfFFdjkv34%#', callback,
    );
    const confPass = wrapperComponent.find(
      '[data-test="reset-form-cont-reset-password"]',
    );
    confPass.at(0).props()['data-__meta'].rules[1].validator.validator(
      'rule', 'Whf34@jfFFdjkv34%#', callback,
    );
    wrapperComponent.setState({
      resetPassword: {
        password: 'Whf34@jfFFdjkv34%#',
      },
    });
    confPass.at(0).props()['data-__meta'].rules[1].validator.validator(
      'rule', 'Whf34@jfFFkv34%#', callback,
    );
    expect(wrapperComponent.state.resetPassword).toBe(undefined);
  });
});
