import React from 'react';
import { shallow } from 'enzyme';

import { containerStore, componentRenders } from '../../../utils/testUtils';
import CreateUpdateArticle from '../../articles/NewArticle';
import ArticlesForm from '../../../components/articles/ArticlesForm';

const store = containerStore({});
const component = shallow(<CreateUpdateArticle store={store} />).dive().dive();

describe('<ArticlePage /> rendering', () => {
  test('should render empty when login is false', () => {
    componentRenders(component, 'article form page');
  });

  test('should render sform if login is true', () => {
    const articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
    };
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('user_id', '1');
    const componentAfterLogin = shallow(<CreateUpdateArticle
      store={store}
      articleData={articleData}
      create={false}
    />)
      .dive().dive();
    const articleform = componentAfterLogin.find(ArticlesForm);
    expect(articleform).toHaveLength(1);
  });
});
