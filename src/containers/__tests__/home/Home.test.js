import React from 'react';
import { mount } from 'enzyme';

import { Home } from '../../home/Home';
import store from '../../../utils/testUtils';


describe('<Home /> component', () => {
  let homeWrapper;
  beforeAll(() => {
    homeWrapper = mount(<Home
      store={store}
      history={[]}
      articles={[]}
      getAllArticles={jest.fn()}
    />);
  });
  test('renders skeleton loader', () => {
    expect(homeWrapper.find("[data-test='skeleton-loader']")).toHaveLength(1);
  });
  test('renders articles', () => {
    homeWrapper.setProps({
      articles: [{
        id: 1,
        title: 'Article',
        description: 'Test article',
      }],
      articleData: {},
      getArticle: jest.fn(),
      clicked: jest.fn(),
    });
    homeWrapper = homeWrapper.find('LeftLandingArticle');
    homeWrapper.simulate('click');
    expect(homeWrapper).toHaveLength(1);
  });
});
