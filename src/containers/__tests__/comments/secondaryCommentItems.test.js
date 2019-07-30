import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';

import SecondaryContent from '../../comments/commentNest/SecondaryContent';


const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<SecondaryContent />', () => {
  const deleteNestedCommentItemMock = jest.fn();
  const props = {
    replies: [
      { body: 'My comment is ths', author: null },
    ],
    slug: 'my comment',
    id: 'id',
    deleteNestedCommentItem: deleteNestedCommentItemMock,
  };

  const store = configureStoreItem();
  let container;
  const wrapperComponent = <SecondaryContent {...props} />;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('renders without error', () => {
    const wrapper = shallow(wrapperComponent);
    expect(wrapper.find("[data-test='nested-item']")).toHaveLength(1);
    const deleteButton = wrapper.find("[className='delete-icon']");
    deleteButton.simulate('click');
    expect(deleteButton).toHaveLength(1);

    act(() => {
      ReactDOM.render(<Provider store={store}>{wrapperComponent}</Provider>, container);
    });
    const editButton = wrapper.find("[className='edit-icon-nest']");
    editButton.simulate('click');
    expect(editButton).toHaveLength(1);
  });
});
