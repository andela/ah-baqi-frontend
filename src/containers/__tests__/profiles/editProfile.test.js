import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import EditProfile from '../../profile/EditProfile';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<FollowUnfollow /> ', () => {
  const store = configureStoreItem();
  test('it renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
    );

    const button = wrapper.find("[data-test='submit-button']");
    button.at(0).simulate('click');

    const editProfileForm = wrapper.find("[data-test='edit-form']");
    editProfileForm.at(0).props().onCancel();
    editProfileForm.at(0).props().onCreate();
    expect(button).toHaveLength(2);
  });
});
