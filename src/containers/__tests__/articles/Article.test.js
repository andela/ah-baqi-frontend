import React from 'react';
import { shallow } from 'enzyme';
import { Skeleton } from 'antd';
import ArticlePage from '../../articles/Article';

import { containerStore } from '../../../utils/testUtils';

const store = containerStore({});
const historyMock = {
  location: {
    pathname: 'age-title_username',
  },
};
const component = shallow(<ArticlePage store={store} history={historyMock} />).dive().dive();

describe('<ArticlePage /> rendering', () => {
  test('should render successfully show skeleton on loading', () => {
    expect(component.find(Skeleton)).toHaveLength(1);
  });

  test('should render successfully show skeleton on loading', () => {
    const articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
    };

    const componentMounted = shallow(<ArticlePage
      store={store}
      articleData={articleData}
      history={historyMock}
    />)
      .dive().dive();
    expect(componentMounted.find(Skeleton)).toHaveLength(1);
  });
});
