import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import Profile from '../../profile/Profile';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<Profile /> ', () => {
  const store = configureStoreItem();
  test('it renders correctly', () => {
    const historyMock = { push: jest.fn() };
    const wrapper = mount(
      <Provider store={store}>
        <Profile history={historyMock} />
      </Provider>,
    );
    const UserProfile = wrapper.find(
      "[data-test='prof-cont-wrap']",
    );
    const event = { preventDefault: jest.fn() };
    UserProfile.props().handleClick(event);
    expect(UserProfile).toHaveLength(1);
  });
});
