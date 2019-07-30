import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import EditUserCommentForm from '../../comments/EditCommentContainer';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};


describe('<EditUserCommentForm />', () => {
  const store = configureStoreItem();
  const editCommentItemMock = jest.fn()
  let container;
  const props = {
    btnClass: 'cancel-edit-111',
    editorClass: 'edit-field-111',
    body: 'my-comment',
    id: 111,
    slug: 'my-article',
    editCommentItem: editCommentItemMock,
  }
  let wrapperComponent = <Provider store={store} ><EditUserCommentForm {...props} /></Provider>

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('form renders without error', () => {
    
    const wrapper = mount(wrapperComponent);
    const form = wrapper.find("[data-test='edit-container']")
    form.at(0).simulate('submit');
    expect(form).toHaveLength(2);

    act(() => {
      ReactDOM.render(wrapperComponent, container);
    });
  });

  test('nest comment', () => {
    const editNestedCommentItemMock = jest.fn()
    const props = {
      editNestedCommentItem: editNestedCommentItemMock,
      isNest: true,
    }
    const wrapper = mount(<Provider store={store} ><EditUserCommentForm {...props} /></Provider>);
    const form = wrapper.find("[data-test='edit-container']")
    form.at(0).simulate('submit');
    expect(form).toHaveLength(2)
  })
 
});
