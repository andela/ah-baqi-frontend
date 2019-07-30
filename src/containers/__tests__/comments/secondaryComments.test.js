import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import SecondaryComment from '../../comments/commentNest/SecondaryComment';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<SecondaryComment />', () => {
  test('Submits form', () => {
    const props = {
      replies: [{
        article: "Some apps I use as a DevOps",
        author: "luke",
        body: "rrrr",
        comment_to: "ffff",
        created_at: "2019-07-29T17:04:32.970265Z",
        id: 114,
        updated_at: "2019-07-29T17:04:32.970301Z",
      }]
    }
    let store = configureStoreItem()
    let wrapper = mount(<Provider store={store} ><SecondaryComment {...props} /></Provider>)
    let editor = wrapper.find("[data-test='nest-item-editor']")
    const event = {target: {name: "pollName", value: "spam"}};
    editor.props().onChange(event);
    editor.props().onSubmit();
    expect(editor).toHaveLength(1);

    const nextEvent = {target: {name: "pollName"}};
    editor.props().onChange(nextEvent);
    editor.props().onSubmit();
    expect(wrapper.find("[data-test='comments-items-container']")).toHaveLength(1);
  })
});
