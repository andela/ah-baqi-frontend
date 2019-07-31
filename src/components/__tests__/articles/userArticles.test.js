import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import UserArticles from '../../profile/UserArticles';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<UserArticles /> ', () => {
  const store = configureStoreItem();
  test('it renders correctly', () => {
    const event = { preventDefault: jest.fn() };
    const handleClickMock = jest.fn();

    const props = {
      myProfile: { profile: { image: 'my_image' } },
      handleClick: handleClickMock,
    };
    const wrapper = mount(
      <Provider store={store}>
        <UserArticles {...props} />
      </Provider>,
    );
    const list = wrapper.find("[data-test='articles-list']");
    const item = {
      title: 'my title',
      comments: [{ body: 'geergwerer', author: 'bill' }],
      description: 'jhgvjhg hgvhgv hgvhgvhg',
    };
    list.at(0).props().renderItem(
      item,
    ).props.children.props.title.props.onClick(event);
    expect(list).toHaveLength(2);
  });
});
