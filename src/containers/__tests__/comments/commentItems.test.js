import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import Content from '../../comments/commentNest/Content';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};


describe('<Content />', () => {
  const deleteCommentMock = jest.fn();
  const likeCommentMock = jest.fn();
  const dislikeCommentMock = jest.fn();
  const props = {
    comments: [{
      article: 'some-apps-i-use-as-a-devops_Clean',
      author: null,
      body: 'ffff',
      created_at: '2019-07-29T14:42:19.504610Z',
      dislikes: 0,
      id: 167,
      likes: 0,
      replies: [],
      updated_at: '2019-07-29T14:42:19.504900Z',
    }],
    slug: 'my-comment',
    deleteComment: deleteCommentMock,
    likeComment: likeCommentMock,
    dislikeComment: dislikeCommentMock,
  };
  const store = configureStoreItem();
  let container;
  const wrapperComponent = <Provider store={store}><Content {...props} /></Provider>;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('renders without error', () => {
    const wrapper = mount(wrapperComponent);
    expect(wrapper.find("[data-test='comment-item']")).toHaveLength(1);

    const deleteButtonIcon = wrapper.find("[className='delete-icon']");
    deleteButtonIcon.simulate('click');
    expect(deleteCommentMock).toHaveBeenCalled();

    const likeCommentButton = wrapper.find("[className='comment-rating-likes']");
    likeCommentButton.at(0).simulate('click');
    expect(likeCommentMock).toHaveBeenCalled();

    const dislikeCommentButton = wrapper.find("[className='comment-rating-dislikes']");
    dislikeCommentButton.at(0).simulate('click');
    expect(dislikeCommentMock).toHaveBeenCalled();

    act(() => {
      ReactDOM.render(wrapperComponent, container);
    });

    const contentItem = wrapper.find("[className='edit-comment-item-btn']");
    contentItem.simulate('click');
    expect(contentItem).toHaveLength(1);

    const dropDownIcon = wrapper.find("[className='dropdown-icon-167']");
    dropDownIcon.at(0).simulate('click');
    expect(dropDownIcon).toHaveLength(1);

    const closeUpIcon = wrapper.find("[className='close-up-167 hide']");
    closeUpIcon.at(0).simulate('click');
    expect(closeUpIcon).toHaveLength(1);
  });
});
