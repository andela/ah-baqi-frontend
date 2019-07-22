import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import EditUserCommentForm, { UnconnectedEditUserCommentForm } from '../../comments/EditCommentContainer';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const setup = () => {
  const store = configureStoreItem();
  const wrapper = shallow(
    <EditUserCommentForm store={store} />,
  ).dive().dive().dive();
  return wrapper;
};

describe('<EditUserCommentForm />', () => {
  test('form renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find("[data-test='edit-container']")).toHaveLength(1);
  });
  test('button renders without error', () => {
    const wrapper = shallow(<UnconnectedEditUserCommentForm />).dive();
    expect(wrapper.find("[data-test='textarea-container']")).toHaveLength(1);
    const button = wrapper.find("[data-test='submit-button']");
    expect(button.length).toBe(1);
  });
});
