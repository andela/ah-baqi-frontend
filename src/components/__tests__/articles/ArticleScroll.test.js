import React from 'react';
import { shallow } from 'enzyme';

import ArticlesScroll from '../../articles/articlesScroll';

const mockFn = jest.fn();

describe('<SingleArticle /> component', () => {
  const props = {
    articles: [
      {
        id: 1,
        title: 'test title',
        description: 'test description',
        taglist: ['tag1', 'tag2'],
      },
      {
        id: 2,
        title: 'test title',
        description: 'test description',
        taglist: ['tag1', 'tag2'],
      },
      {
        id: 3,
        title: 'test title',
        description: 'test description',
        taglist: ['tag1', 'tag2'],
      },
      {
        id: 4,
        title: 'test title',
        description: 'test description',
        taglist: ['tag1', 'tag2'],
      },
      {
        id: 5,
        title: 'test title',
        description: 'test description',
        taglist: ['tag1', 'tag2'],
      },
    ],
    handleClick: mockFn,
    fetchMoreData: mockFn,
    nextPage: 'https://articles/fake_article_username/?page=2',
  };
  const wrapper = shallow(<ArticlesScroll {...props} />);

  test('SingleArticle renders correctly', () => {
    expect(wrapper.find("[data-test='infinite-article-scroll']")).toHaveLength(1);
    wrapper.props().next();
    expect(mockFn).toHaveBeenCalled();
  });
});
