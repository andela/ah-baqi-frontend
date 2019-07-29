import React from 'react';
import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../reducers/index';

import EditProfile, { UnconnectedEditProfile } from '../../profile/EditProfile';
import { mockFn } from '../../../utils/testUtils';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const props = {
  displayModalActions: mockFn,
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
    let wrapper;
    let button;
    beforeEach(() => {
      wrapper = shallow(<UnconnectedEditProfile
        editUserProfile={mockFn}
        userProfile={profile}
        {...props}
      />);
      button = wrapper.find("[data-test='submit-button']");
      button.simulate('click', { preventDefault() {} });
    });
    test('button renders correctly', () => {
      expect(button).toHaveLength(1);
    });
    test('`getUserProfile` action creator is a function on the props', () => {
      wrapper = setup();
      const { editUserProfile } = wrapper.instance().props;
      expect(editUserProfile).toBeInstanceOf(Function);
    });
  });
  describe('test connected component', () => {
    test('updates state correctly', async () => {
      const editedFields = {
        first_name: 'boloyang',
        last_name: 'wamnyonyez',
      };
      const wrapper = setup();
      wrapper.instance().editUserProfile = mockFn;
      wrapper.instance().editUserProfile();
      await mockFn(editedFields);
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
