import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import CoomentContainer, { UnconnectedCoomentContainer } from '../../comments/Comments';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const setup = () => {
  const store = configureStoreItem();
  const wrapper = shallow(
    <CoomentContainer store={store} comments={[]} />,
  ).dive().dive();
  return wrapper;
};

describe('<CoomentContainer />', () => {
  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find("[data-test='comments-container']")).toHaveLength(1);
  });
  test('renders correctly', () => {
    const deleteCommentMock = jest.fn();
    const likeCommentMock = jest.fn();
    const dislikeCommentMock = jest.fn();

    const props = {
      comments: [],
      slug: 'my comment',
      deleteComment: deleteCommentMock,
      likeComment: likeCommentMock,
      dislikeComment: dislikeCommentMock,
    };
    const wrapper = shallow(<UnconnectedCoomentContainer />);
    const handleSubmitMock = jest.fn();
    wrapper.instance().handleSubmit = handleSubmitMock;
    handleSubmitMock();
    expect(handleSubmitMock).toHaveBeenCalled();
    const commentWrapper = wrapper.find("[data-test='comments-container-content']").children();
    expect(commentWrapper).toHaveLength(0);
    const wrapperItem = mount(shallow(<UnconnectedCoomentContainer {...props} />).get(0));
    const comtEditor = wrapperItem.find("[data-test='comment-item-editor']");
    expect(comtEditor).toHaveLength(1);
    comtEditor.simulate('submit');
  });
});
