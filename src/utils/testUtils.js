import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { shallow } from 'enzyme';
import { instance } from './axios';

import rootReducer from '../reducers/index';

const mockStore = configureStore([thunk]);
const initialState = {
  beenLiked: false,
  article: {
    articles: [],
  },
};
const store = mockStore(initialState);

const hasAttributes = (wrapper, attributeValue) => (wrapper.find(`[data-test="${attributeValue}"]`));
const hasElement = (wrapper, element) => (wrapper.find(element));

export const componentRenders = (wrapper, attributeValue) => {
  const component = hasAttributes(wrapper, attributeValue);
  expect(component.length).toBe(1);
};

export const propOnchangeTests = (wrapper, element, mockFn) => {
  const elementf = hasElement(wrapper, element);
  elementf.props().onChange();
  expect(mockFn).toHaveBeenCalled();
};

export const propOnClickTests = (wrapper, element, mockFn) => {
  const elementf = hasAttributes(wrapper, element);
  elementf.props().onClick();
  expect(mockFn).toHaveBeenCalled();
};

export const propsOnActionSpy = (wrapper, attributeValue, methosToSpyOn) => {
  const elementFound = wrapper.dive().find(attributeValue);
  elementFound.simulate(methosToSpyOn);
  const methodSpy = jest.spyOn(wrapper.instance().props, methosToSpyOn);
  expect(methodSpy).toHaveBeenCalled();
};

export const createWrapper = (Element, props) => {
  const wrapper = shallow(<Element {...props} />);
  return wrapper;
};

export const socialAuthTest = (socialAuthResponse, action, reqData, provider, constant) => {
  jest.spyOn(instance, 'post');

  test(`${provider} signin`, async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: { ...socialAuthResponse },
    }));

    await store.dispatch(action(reqData, provider));
    expect(store.getActions()[0].payload).toEqual(socialAuthResponse);
    expect(store.getActions()[0].type).toEqual(constant);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
};

export const containerStore = (initialStateFull) => {
  const stateStore = applyMiddleware(thunk)(createStore);
  return stateStore(rootReducer, initialStateFull);
};

export const mockFn = jest.fn();

export default store;
