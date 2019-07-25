import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import FollowList from '../../profile/ListFollowers';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const setup = () => {
  const store = configureStoreItem();
  const wrapper = shallow(
    <FollowList store={store} />,
  ).dive().dive();
  return wrapper;
};

describe('<FollowList />', () => {
  test('renders without error', () => {
    const wrapper = setup();
    localStorage.setItem('followers');
    expect(wrapper.find("[data-test='list-followers']")).toHaveLength(1);
  });
});
