import React from 'react';
import { shallow } from 'enzyme';

import AuthorHeadData from '../../articles/singlearticle/AuthorArticleData';
import { componentRenders, mockFn } from '../../../utils/testUtils';

describe('<AuthorHeadData /> component', () => {
  const props = {
    articleData: {
      title: 'test title',
      description: 'test description',
    },
    articleActions: {},
  };
  const wrapper = shallow(
    <AuthorHeadData
      articleData={props.articleData}
      articleActions={props.articleActions}
      editClick={mockFn}
    />,
  );

  test('AuthorHeadData renders correctly', () => {
    componentRenders(wrapper, 'author-data');
  });
});
