import React from 'react';
import { Row, Col, Select } from 'antd';
import CKEditor from 'ckeditor4-react';

import ImageUploader from './singlearticle/imageUpload';
import './NewArticle.scss';

const formTitle = (title, handleChange) => (
  <div className="form-group">
    <input
      type="text"
      className="article-create-input"
      placeholder="Add A Title For Your Article"
      onChange={event => handleChange(event, 'title')}
      value={title}
      data-test="title-input"
    />
    <input
      type="submit"
      className="submit-article-btn"
      value="Publish"
    />
  </div>
);

const formDescription = (description, handleChange) => (
  <div className="form-group">
    <textarea
      className="article-create-input"
      placeholder="Add Some Description For Your Article"
      rows="3"
      onChange={event => handleChange(event, 'description')}
      value={description}
    />
  </div>
);

const ckEditor = (body, handleChange) => (
  <div className="form-group">
    <CKEditor
      data={body}
      editorName="editor1"
      type="classic"
      onChange={event => handleChange(event, 'editor')}
      data-test="text word editor"
    />
  </div>
);

const formImageUploader = (image, imageUrl, imageUpload, handleChange) => (
  <ImageUploader
    image={image}
    imageUrl={imageUrl}
    imageUpload={imageUpload}
    handleChange={handleChange}
    data-test="image drop"
  />
);

const formTagsSelect = (size, tagList, handleChange, children) => (
  <div className="form-group">
    <Select
      mode="tags"
      size={size}
      placeholder="Add your tag(s) here"
      value={tagList}
      className="full-width"
      onChange={event => handleChange(event, 'tags')}
    >
      {children}
    </Select>
  </div>
);

const imageUrl = '';

const ArticlesForm = (props) => {
  const {
    children, handleChange, size, handleSubmit, create, title,
    description, body, tagList, article, image, imageUpload,
  } = props;

  const slug = !create && article.slug;

  return (
    <div data-test="new-article-form-component">
      <Row>
        <Col span={18} push={3}>
          <form
            className="article-form"
            onSubmit={event => handleSubmit(event, create, slug)}
          >
            {formTitle(title, handleChange)}
            {formDescription(description, handleChange)}
            {formImageUploader(image, imageUrl, imageUpload, handleChange)}
            {ckEditor(body, handleChange)}
            {formTagsSelect(size, tagList, handleChange, children)}
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlesForm;
