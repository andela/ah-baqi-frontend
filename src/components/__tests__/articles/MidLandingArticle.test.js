import React from 'react';
import { shallow } from 'enzyme';

import SingleMidLandingArticle from '../../articles/landingPage/MiddleLandingArticle';

const mockFn = jest.fn();

describe('<SingleMidLandingArticle /> component', () => {
  const props = {
    article: {
      title: 'test title',
      description: 'test description',
    },
    clicked: mockFn,
  };
  const wrapper = shallow(
    <SingleMidLandingArticle
      article={props.article}
      clicked={props.clicked}
    />,
  );

  test('SingleMidLandingArticle renders correctly', () => {
    expect(wrapper.find("[data-test='single-mid-landing-article']")).toHaveLength(1);
    wrapper.props().onClick();
    expect(mockFn).toHaveBeenCalled();
  });
});
