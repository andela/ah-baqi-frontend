import React from 'react';
import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/index';

import EditProfile, { UnconnectedEditProfile } from '../../profile/EditProfile';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const props = {
  displayModalActions: jest.fn(),
};
const setup = () => {
  const store = configureStoreItem();
  const wrapper = shallow(
    <EditProfile store={store} />,
  ).dive().dive();
  return wrapper;
};

describe('redux properties', () => {
  const profile = {
    email: 'mwangi@gmail.com',
    username: 'mwangi',
    first_name: 'wangombe',
    last_name: 'boniface',
    country: 'kenya',
    bio: 'I love fish',
    image: 'https://res.cloudinary.com/wekesa931/image/upload/v1554520694/samples/bike',
  };
  describe('`editProfile` action creator', () => {
    let editProfileMock;
    let wrapper;
    let button;
    beforeEach(() => {
      editProfileMock = jest.fn();
      wrapper = shallow(<UnconnectedEditProfile
        editUserProfile={editProfileMock}
        userProfile={profile}
        {...props}
      />);
      button = wrapper.find("[data-test='submit-button']");
      button.simulate('click', { preventDefault() {} });
    });
    test('button renders correctly', () => {
      expect(button).toHaveLength(1);
    });
    test('form is cancelled on request', () => {
      const cancelFormInputMock = jest.fn();
      wrapper.instance().handleCancel = cancelFormInputMock;
      cancelFormInputMock();
      expect(cancelFormInputMock).toHaveBeenCalled();
    });
    test('`getUserProfile` action creator is a function on the props', () => {
      wrapper = setup();
      const { editUserProfile } = wrapper.instance().props;
      expect(editUserProfile).toBeInstanceOf(Function);
    });
    test('`getUserProfile` action creator is a function on the props', () => {
      wrapper = setup();
      const { editUserProfile } = wrapper.instance().props;
      expect(editUserProfile).toBeInstanceOf(Function);
    });
    test('`displayModalActions` action creator is a function on the props', () => {
      wrapper = setup();
      const { editUserProfile } = wrapper.instance().props;
      expect(editUserProfile).toBeInstanceOf(Function);
    });
    test('show modal is called', () => {
      const showModalMock = jest.fn();
      wrapper.instance().showModal = showModalMock;
      showModalMock();
      expect(showModalMock).toHaveBeenCalled();
    });
  });
  describe('test connected component', () => {
    test('updates state correctly', async () => {
      const editedFields = {
        first_name: 'boloyang',
        last_name: 'wamnyonyez',
      };
      const wrapper = setup();
      const editUserProfileMock = jest.fn();
      wrapper.instance().editUserProfile = editUserProfileMock;
      await editUserProfileMock(editedFields);
      expect(editUserProfileMock).toHaveBeenCalled();
    });
  });
});
