import React from 'react';
import { mount } from 'enzyme';

import { containerStore, componentRenders } from '../../../utils/testUtils';
import CreateUpdateArticle, { UnconnectedCreateUpdateArticle } from '../../articles/NewArticle';
import ArticlesForm from '../../../components/articles/ArticlesForm';

const store = containerStore({});
const component = mount(<CreateUpdateArticle store={store} />);


describe('<ArticlePage />', () => {
  test('should render empty when login is false', () => {
    componentRenders(component, 'article form page');
  });

  test('should render form if login is true', () => {
    const articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
    };
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('user_id', '1');
    const componentAfterLogin = mount(<CreateUpdateArticle
      store={store}
      articleData={articleData}
      create={false}
    />);
    const articleform = componentAfterLogin.find(ArticlesForm);
    expect(articleform).toHaveLength(1);
  });
  test('renders correctly', () => {
    const articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
      image: 'imageUrl',
    };

    const props = {
      article: articleData,
      create: true,
      createArticle: jest.fn(),
      editArticle: jest.fn(),
      handleSubmit: jest.fn(),
    };
    const wrapper = mount(<UnconnectedCreateUpdateArticle {...props} />);
    const form = wrapper.find("[data-test='articles-form']");
    expect(form).toHaveLength(1);
    form.simulate('submit');
    const spy = jest.spyOn(wrapper.instance().props, 'createArticle');
    expect(spy).toHaveBeenCalled();
  });
});
