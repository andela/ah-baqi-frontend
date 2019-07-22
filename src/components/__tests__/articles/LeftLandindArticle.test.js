import React from 'react';
import { shallow } from 'enzyme';

import LeftLandingArticle from '../../articles/landingPage/LeftLandindArticle';

describe('<LeftLandingArticle /> component', () => {
  const props = {
    article: {
      title: 'test title',
      description: 'test description',
    },
    clicked: jest.fn(),
  };
  const wrapper = shallow(
    <LeftLandingArticle
      article={props.article}
      clicked={props.clicked}
    />,
  );

  test('LeftLandingArticle renders correctly', () => {
    expect(wrapper.find("[data-test='left-landing-article']")).toHaveLength(1);
  });
});
