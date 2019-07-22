import React from 'react';
import { Row, Col } from 'antd';

import AuthorHeadData from './singlearticle/AuthorArticleData';
import './landingPage/Singlearticle.scss';

const Article = ({
  article, deleteAction, history, editClick,
}) => (
  <div data-test="single-article">
    <Row>
      <Col span={18} offset={3}>
        <Row>
          <Col span={24} className="general-article-cols">
            <AuthorHeadData
              articleData={article}
              onDelete={deleteAction}
              history={history}
              editClick={editClick}
            />
          </Col>
          <Col span={24} className="general-article-cols">
            <p className="article-title">
              {article.title}
            </p>
          </Col>
          <Col span={24} className="general-article-cols">
            <div className="article-description">
              {article.description}
            </div>
          </Col>
          {article.image ? (
            <Col span={24} className="general-article-cols article-image">
              <img src={article.image} alt={article.slug} />
            </Col>
          ) : null}

          <Col span={24} className="general-article-cols">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.body }} // eslint-disable-line
            />
          </Col>
          <Col span={24} className="tag-cont" data-test="article tags">
            {article.tagList && article.tagList.map(tag => (
              <span key={tag} className="tag-disp">
                {tag}
              </span>
            ))}
          </Col>
          <Col span={24} className="general-article-cols">
            <Row>
              <Col className="article-liking" span={4}>Liking</Col>
              <Col className="article-liking" push={16} span={4}>
                Rating
              </Col>
            </Row>
          </Col>
          <Col span={24} className="general-article-cols">
            <Row>
              <Col className="parent-comment">
                <Col>Parent Comment</Col>
                <Row>
                  <Col span={20} push={4}>Child Comment</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Article;
