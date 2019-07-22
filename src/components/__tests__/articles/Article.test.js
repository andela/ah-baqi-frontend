import React from 'react';
import { shallow } from 'enzyme';

import SingleArticle from '../../articles/Article';

describe('<SingleArticle /> component', () => {
  const props = {
    article: {
      title: 'test title',
      description: 'test description',
      taglist: ['tag1', 'tag2'],
    },
  };
  const wrapper = shallow(<SingleArticle article={props.article} />);

  test('SingleArticle renders correctly', () => {
    expect(wrapper.find("[data-test='single-article']")).toHaveLength(1);
  });
});
