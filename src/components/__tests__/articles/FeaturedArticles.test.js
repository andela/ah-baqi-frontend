import React from 'react';
import { shallow } from 'enzyme';

import FeaturedArticle from '../../articles/FeaturedArticles';

describe('<FeaturedArticle /> component', () => {
  const props = { articles: [{ slug: 'test' }] };
  const wrapper = shallow(<FeaturedArticle />);
  const wrapperWithProps = shallow(<FeaturedArticle articles={props.articles} />);

  test('FeaturedArticle renders correctly', () => {
    expect(wrapper.find("[data-test='featured-article']")).toHaveLength(1);
  });

  test('SingleFeaturedArticle renders correctly', () => {
    expect(wrapperWithProps.find("[data-test='single-featured-article']")).toHaveLength(1);
  });
});
