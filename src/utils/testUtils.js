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
const newState = {
  article: {
    articles: [
      {
        id: 1,
        description: 'mini desc',
        title: 'title',
        body: 'my bidy',
      },
      {
        id: 2,
        description: 'mini desc',
        title: 'title',
        body: 'my bidy',
      },
      {
        id: 3,
        description: 'mini desc',
        title: 'title',
        body: 'my bidy',
      },
      {
        id: 4,
        description: 'mini desc',
        title: 'title',
        body: 'my bidy',
      },
      {
        id: 5,
        description: 'mini desc',
        title: 'title',
        body: 'my bidy',
      },
      {
        id: 6,
        description: 'mini desc',
        title: 'title',
        body: 'my bidy',
      },
    ],
    nextPage: 'next_page?page=2',
    articleCount: 6,
  },
};
const store = mockStore(initialState);
export const upStore = mockStore(newState);

const hasAttributes = (wrapper, attributeValue) => (wrapper.find(`[data-test="${attributeValue}"]`));
export const hasElement = (wrapper, element) => wrapper.find(element);

export const componentRenders = (wrapper, attributeValue) => {
  const component = hasAttributes(wrapper, attributeValue);
  expect(component.length).toBe(1);
};

export const propOnchangeTests = (wrapper, element, mockFn) => {
  const elementf = hasElement(wrapper, element);
  elementf.props().onChange();
  expect(mockFn).toHaveBeenCalled();
};

export const propOnClickTests = (wrapper, element, mockFn, method = 'onClick') => {
  const elementf = hasAttributes(wrapper, element);
  if (method === 'clicked') {
    elementf.props().clicked();
  } else if (method === 'onClick') {
    elementf.props().onClick();
  } else if (method === 'onSubmit') {
    elementf.props().onSubmit();
  }
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
      data: socialAuthResponse,
    }));

    await store.dispatch(action(reqData, provider));
    expect(store.getActions()[0].payload).toEqual(socialAuthResponse);
    expect(store.getActions()[0].type).toEqual(constant);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
};

export const instanceMocks = (method, data) => {
  jest.spyOn(instance, method);

  if (method === 'post') {
    instance.post.mockImplementation(() => Promise.resolve({
      data,
    }));
  } else if (method === 'get') {
    instance.get.mockImplementation(() => Promise.resolve({
      data,
    }));
  } else if (method === 'delete') {
    instance.delete.mockImplementation(() => Promise.resolve({
    }));
  } else if (method === 'put') {
    instance.put.mockImplementation(() => Promise.resolve({
      data,
    }));
  }
};

export const containerStore = (initialStateFull) => {
  const stateStore = applyMiddleware(thunk)(createStore);
  return stateStore(rootReducer, initialStateFull);
};

export const mockFn = jest.fn();

export const reducerTest = (action, reducer, payload, initState) => {
  test(`${action} action returns actionCalled:true`, () => {
    const newState = reducer(initState, { type: action, payload });
    expect(newState.actionCalled).toBe(true);
  });
};

export const testDispatchWithPayload = (store, methodAction, payloadRes, storageCalled = '') => {
  test(`should test ${payloadRes} action is called`, async () => {
    await store.dispatch(methodAction());
    expect(store.getActions()[0].type).toEqual(payloadRes);
    if (storageCalled) {
      expect(storageCalled).toHaveBeenCalled();
    }
  });
};

export const rejectPromiseTest = (method, action, actionName, params = '', result) => {
  jest.spyOn(instance, method);

  test(`shoult test ${actionName} action fail`, async () => {
    if (method === 'delete') {
      instance.delete.mockImplementation(() => Promise.reject());
    } else if (method === 'get') {
      instance.get.mockImplementation(() => Promise.reject());
    } else if (method === 'post') {
      instance.post.mockImplementation(() => Promise.reject());
    } else if (method === 'put') {
      instance.put.mockImplementation(() => Promise.reject());
    }

    await store.dispatch(action(params));
    expect(store.getActions()[2]).toBe(result);
  });
};

export const passwordResetConfTestsPass = (data, requestConst, action, actionName) => {
  test(`should test ${actionName} successfully`, async () => {
    instanceMocks('post', data);
    await store.dispatch(action(data));
    expect(store.getActions()[0].type).toEqual(requestConst);
    expect(store.getActions()[1].data).toEqual(data);
  });
};

export const passwordResetConfTestsFail = (data, requestConst, action, actionName) => {
  test(`should test ${actionName} fails`, async () => {
    jest.spyOn(instance, 'post');
    instance.post.mockImplementation(() => Promise.reject());
    await store.dispatch(action(data));
    expect(store.getActions()[0].type).toBe(requestConst);
  });
};

export const myProfile = {
  profile: {
    image: 'iamge_url',
    first_name: 'first_name',
    last_name: 'last_name',
    bio: 'my_bio',
  },
};

export default store;
