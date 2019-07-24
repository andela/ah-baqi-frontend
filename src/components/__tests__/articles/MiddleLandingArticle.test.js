import React from 'react';
import { shallow } from 'enzyme';

import MiddleLandingArticle from '../../articles/landingPage/MiddleLandingArticles';

describe('<MiddleLandingArticle /> component', () => {
  const wrapper = shallow(
    <MiddleLandingArticle
      articles={['article1', 'article2', 'article3']}
    />,
  );

  test('MiddleLandingArticle renders correctly', () => {
    expect(wrapper.find("[data-test='mid-landing-article']")).toHaveLength(1);
  });
});
