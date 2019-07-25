import React from 'react';
import { shallow, mount } from 'enzyme';

import { containerStore, componentRenders } from '../../../utils/testUtils';
import CreateUpdateArticle, { UnconnectedCreateUpdateArticle } from '../../articles/NewArticle';
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
  test('renders correctly', () => {
    const createArticleMock = jest.fn();
    const editArticleMock = jest.fn();
    const articleData = {
      id: 1,
      body: 'this is my body',
      title: 'Page Title',
      description: 'article description',
      slug: 'page-title_username',
    };

    const props = {
      article: articleData,
      create: createArticleMock,
      editArticle: editArticleMock,
    };
    const wrapper = shallow(<UnconnectedCreateUpdateArticle />);
    const handleSubmitMock = jest.fn();
    wrapper.instance().handleSubmit = handleSubmitMock;
    handleSubmitMock();
    expect(handleSubmitMock).toHaveBeenCalled();
    const commentWrapper = wrapper.find("[data-test='comments-container-content']").children();
    expect(commentWrapper).toHaveLength(0);
    const wrapperItem = mount(shallow(<UnconnectedCreateUpdateArticle {...props} />).get(0));
    const form = wrapperItem.find("[data-test='the_form']");
    expect(form).toHaveLength(1);
    form.simulate('submit');
  });
});
