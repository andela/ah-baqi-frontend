import React from 'react';
import {
  Row, Col, Select, Icon,
} from 'antd';
import CKEditor from 'ckeditor4-react';
import Dropzone from 'react-dropzone';
import './NewArticle.scss';

const ArticlesForm = (props) => {
  const {
    children, handleChange, size, handleSubmit, create, title,
    description, body, tagList, article, image, imageUpload,
  } = props;

  const imageUrl = '';
  const slug = !create && article.slug;

  return (
    <div data-test="new-article-form-component">
      <Row>
        <Col span={18} push={3}>
          <form
            className="article-form"
            onSubmit={event => handleSubmit(event, create, slug)}
          >
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

            <div className="form-group">
              <textarea
                className="article-create-input"
                placeholder="Add Some Description For Your Article"
                rows="3"
                onChange={event => handleChange(event, 'description')}
                value={description}
              />
            </div>

            <div
              className="input-group"
              data-test="image drop"
            >
              <Dropzone
                onDrop={acceptedFile => imageUpload(acceptedFile, imageUrl, handleChange)}
                accept="image/*"
              >
                {({ getRootProps, getInputProps }) => (
                  <section data-test="dropzone section">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {image || (
                        <p>
                          <Icon
                            type="file-image"
                            style={{ fontSize: '20px' }}
                          />
                          Drag &apos; n &apos; drop image here, or click to select image
                        </p>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>
              <div className="show-thumb">
                {image ? (
                  <span style={{ color: 'green' }}>
                    <Icon type="check-circle" />
                    {' '}
                    Image successfully uploaded
                  </span>
                ) : 'No image Selected Yet'}
              </div>
            </div>

            <div className="form-group">
              <CKEditor
                data={body}
                editorName="editor1"
                type="classic"
                onChange={event => handleChange(event, 'editor')}
                data-test="text word editor"
              />
            </div>

            <div className="form-group">
              <Select
                mode="tags"
                size={size}
                placeholder="Add your tag(s) here"
                value={tagList}
                style={{ width: '100%' }}
                onChange={event => handleChange(event, 'tags')}
              >
                {children}
              </Select>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlesForm;
