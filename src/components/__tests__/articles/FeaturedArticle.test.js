import React from 'react';
import { shallow } from 'enzyme';

import SingleFeaturedArticle from '../../articles/featured/FeaturedArticle';

const mockFn = jest.fn();

describe('<SingleFeaturedArticle /> component', () => {
  const props = {
    article: {
      title: 'test title',
      description: 'test description',
    },
    clicked: mockFn,
  };
  const wrapper = shallow(
    <SingleFeaturedArticle
      article={props.article}
      clicked={props.clicked}
    />,
  );

  test('SingleFeaturedArticle renders correctly', () => {
    expect(wrapper.find("[data-test='single-featured-article']")).toHaveLength(1);
    wrapper.props().onClick();
    expect(mockFn).toHaveBeenCalled();
  });
});
