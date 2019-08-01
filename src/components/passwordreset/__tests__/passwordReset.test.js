import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import PasswordReset from '../passwordResetContainer';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<Content />', () => {
  const store = configureStoreItem();
  test('It renders correctly', () => {
    const wrapperComponent = mount(
      <Provider store={store}>
        <BrowserRouter>
          <PasswordReset />
        </BrowserRouter>
      </Provider>,
    );
    const formItem = wrapperComponent.find('[data-test="reset-form-cont"]');
    expect(formItem).toHaveLength(2);

    const event = { target: { name: 'password', value: 'Whf34@jfFFdjkv34%#' }, preventDefault: jest.fn() };
    formItem.at(0).props().onSubmit(event);

    const resetPass = wrapperComponent.find('[data-test="email-reset-passwor"]');
    resetPass.at(0).props().onChange(event);
    expect(resetPass).toHaveLength(2);
  });
});
