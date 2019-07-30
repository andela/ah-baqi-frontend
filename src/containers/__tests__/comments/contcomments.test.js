import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import CoomentContainer from '../../comments/Comments';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};


describe('<CoomentContainer />', () => {
  const props = {
    comments: [{
      article: 'some-apps-i-use-as-a-devops_Clean',
      author: 'luke',
      body: 'ffff',
      created_at: '2019-07-29T14:42:19.504610Z',
      dislikes: 0,
      id: 167,
      likes: 0,
      replies: [],
      updated_at: '2019-07-29T14:42:19.504900Z',
    }],
  };
  const store = configureStoreItem();
  const wrapperComponent = (
    <Provider store={store}>
      <CoomentContainer {...props} />
    </Provider>
  );
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('renders correctly', () => {
    const wrapper = mount(wrapperComponent);
    expect(wrapper.find("[data-test='comments-container']")).toHaveLength(1);

    const editor = wrapper.find("[data-test='comment-item-editor']");
    const event = { target: { name: 'pollName', value: 'spam' } };
    editor.props().onChange(event);
    editor.props().onSubmit();
    const nextEvent = { target: { name: 'pollName' } };
    editor.props().onChange(nextEvent);
    editor.props().onSubmit();
    expect(editor).toHaveLength(1);


    act(() => {
      ReactDOM.render(wrapperComponent, container);
    });
    const button = wrapper.find("[className='msg-icon']");
    button.simulate('click');
    expect(button).toHaveLength(1);
  });
});
