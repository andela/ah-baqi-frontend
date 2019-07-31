import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import Header from '../../header/Header';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<Header />', () => {
  const store = configureStoreItem();
  test('It renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    const navBar = wrapper.find('[data-test="navbar-modal-section"]');

    const values = {
      username: 'luke',
      email: 'brrrr@gmail.com',
      password: 'luke@12345',
    };
    const error = false;
    const formProp = { validateFields: jest.fn(error, values) };
    const event = { preventDefault: jest.fn() };

    navBar.at(0).props().submitSignup(event, formProp, 'signup');
    formProp.validateFields();
    const response = { accessToken: 'my-token' };
    navBar.at(0).props().google(response, 'google');
    navBar.at(0).props().google(response, 'facebook');
    navBar.at(0).props().onFailure();
    expect(navBar).toHaveLength(1);
  });
});
