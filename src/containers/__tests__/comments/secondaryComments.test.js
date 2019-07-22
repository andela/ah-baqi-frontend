import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import SecondaryComment, { UnconnectedSecondaryComment } from '../../comments/commentNest/SecondaryComment';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const setup = () => {
  const store = configureStoreItem();
  const wrapper = shallow(
    <SecondaryComment store={store} replies={[]} />,
  ).dive().dive();
  return wrapper;
};

describe('<SecondaryComment />', () => {
  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find("[data-test='comments-items-container']")).toHaveLength(1);
  });
  test('renders without error', () => {
    const wrapper = setup();
    const handleSubmitMock = jest.fn();
    wrapper.instance().handleSubmit = handleSubmitMock;
    handleSubmitMock();
    expect(handleSubmitMock).toHaveBeenCalled();
    const submit = handleSubmitMock.mock.calls.length;
    expect(submit).toBe(1);
    expect(wrapper.instance().state.value).toBe('');
    expect(wrapper.instance().props.addNestedComment).toBeInstanceOf(Function);
    expect(wrapper.instance().props.deleteNestedCommentItem).toBeInstanceOf(Function);
  });
  test('submits comment', () => {
    const wrapper = shallow(<UnconnectedSecondaryComment />);
    const handleSubmitMock = jest.fn();
    wrapper.instance().handleSubmit = handleSubmitMock;
    handleSubmitMock();
    expect(handleSubmitMock).toHaveBeenCalled();

    const commentWrapper = wrapper.find("[data-test='comments-container-content']").children();
    expect(commentWrapper).toHaveLength(0);
  });
});
