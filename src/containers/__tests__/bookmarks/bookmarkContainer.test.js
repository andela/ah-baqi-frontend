import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import Bookmark, { UnconnectedBookmark } from '../../bookmark/Bookmark';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const setup = () => {
  const store = configureStoreItem();
  const getBookmarkMock = jest.fn();
  const wrapper = shallow(
    <Bookmark store={store} getBookmarks={getBookmarkMock} />,
  ).dive().dive();
  return wrapper;
};

describe('<BookmarkContainer />', () => {
  const getBookmarksMock = jest.fn();
  const addBookmarkMock = jest.fn();

  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find("[data-test='bookmark-container']")).toHaveLength(1);
  });
  test('bookmarks is updated', () => {
    const bookmarks = {
      'bookmarked articles': [{
        slug: 'cant-roll-out-of-bed-in-the-morning_Username',
        id: 8,
      },
      {
        slug: 'cant-roll-out-of-in-the-morning_Username',
        id: 9,
      }],
    };

    const wrapper = shallow(<UnconnectedBookmark
      getBookmarks={getBookmarksMock}
      bookmarks={bookmarks}
      addBookmark={addBookmarkMock}
    />);
    expect(wrapper.find("[data-test='bookmark-container-add-icon']")).toHaveLength(1);
    const bookmarkIcon = wrapper.find("[data-test='bookmark-container-add-icon']");
    bookmarkIcon.simulate('click');
    expect(addBookmarkMock).toHaveBeenCalled();
  });
  test('bookmarks is updated', () => {
    const bookmarks = { message: 'no bookmarks' };
    const wrapper = shallow(<UnconnectedBookmark
      bookmarks={bookmarks}
      getBookmarks={getBookmarksMock}
      addBookmark={addBookmarkMock}
    />);
    const bookmarkIcon = wrapper.find("[data-test='bookmark-container-add']");
    bookmarkIcon.simulate('click');
  });
  test('bookmarks is updated', () => {
    const slug = 'cant-roll-out-of-bed-in-the-morning_Username';
    const bookmarks = {
      'bookmarked articles': [{
        slug: 'cant-roll-out-of-bed-in-the-morning_Username',
        id: 8,
      }],
    };
    const removeBookmarkMock = jest.fn();
    const wrapper = shallow(<UnconnectedBookmark
      slug={slug}
      bookmarks={bookmarks}
      getBookmarks={getBookmarksMock}
      removeBookmark={removeBookmarkMock}
    />);
    const bookmarkIcon = wrapper.find("[data-test='bookmark-container-remove']");
    bookmarkIcon.simulate('click');
    expect(removeBookmarkMock).toHaveBeenCalled();
  });
});
