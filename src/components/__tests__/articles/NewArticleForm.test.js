import React from 'react';
import { shallow } from 'enzyme';
import CKEditor from 'ckeditor4-react';
import { Select } from 'antd';

import { componentRenders, propOnchangeTests } from '../../../utils/testUtils';
import NewArticleForm from '../../articles/ArticlesForm';

const mockFn = jest.fn();

const myArticle = {
  slug: '',
  body: '',
  tagList: ['tag1', 'tag2'],
};

describe('<NewArticleForm /> component', () => {
  const wrapper = shallow(<NewArticleForm
    article={myArticle}
    handleChange={mockFn}
    handleSubmit={mockFn}
    imageUpload={mockFn}
  />);

  test('NewArticleForm renders correctly', () => {
    componentRenders(wrapper, 'new-article-form-component');
    componentRenders(wrapper, 'image drop');
    componentRenders(wrapper, 'text word editor');
  });

  test('should test onChange is called for CKEditor', () => {
    propOnchangeTests(wrapper, CKEditor, mockFn);
    propOnchangeTests(wrapper, 'textarea', mockFn);
    propOnchangeTests(wrapper, "[data-test='title-input']", mockFn);
  });

  test('should test array mapping for tags and onchange', () => {
    propOnchangeTests(wrapper, Select, mockFn);
  });

  test('should test form submit method is called', () => {
    const articleForm = wrapper.find('form');
    articleForm.props().onSubmit();
    expect(mockFn).toHaveBeenCalled();
  });
});
