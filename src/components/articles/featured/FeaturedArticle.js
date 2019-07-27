import React from 'react';
import { Row, Col } from 'antd';

import { articleMetaData, articleImage } from '../../../utils/articleElements';

const FeaturedArticle = ({ article, clicked }) => {
  const { createdAt, reading_time, rating } = article; // eslint-disable-line

  return (
    <Row
      className="featured-article-container article-hover"
      onClick={() => clicked(article.slug)}
      data-test="single-featured-article"
    >
      <Col span={15} offset={3}>
        <Row>
          <Col span={24} className="featured-article-title">
            <h3>
              {article.title}
            </h3>
          </Col>
          <Col span={24} className="featured-article-desc">
            {article.description.substr(0, 100)}
          </Col>
          {articleMetaData(createdAt, reading_time, rating)}
        </Row>
      </Col>
      {articleImage(6, 'featured-artical-img-cont',
        article, 'featured-image-article')}
    </Row>
  );
};

export default FeaturedArticle;
