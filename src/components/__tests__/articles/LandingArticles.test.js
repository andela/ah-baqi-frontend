import React from 'react';
import { shallow } from 'enzyme';

import LandingArticles from '../../articles/LandingArticles';

describe('<LandingArticle /> component', () => {
  const wrapper = shallow(<LandingArticles />);

  test('LandingArticle renders correctly', () => {
    expect(wrapper.find("[data-test='left-landing-article']")).toHaveLength(1);
    expect(wrapper.find("[data-test='middle-landing-article']")).toHaveLength(1);
  });
});
