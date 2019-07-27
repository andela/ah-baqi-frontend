import React from 'react';
import { Col, Row } from 'antd';
import { articleImage, articleMetaData } from '../../../utils/articleElements';

const MidLandingArticle = ({ article, clicked }) => {
  const { createdAt, reading_time, rating } = article; // eslint-disable-line
  return (
    <Col
      span={24}
      className="mid-landing-article article-hover"
      onClick={() => clicked(article.slug)}
      data-test="single-mid-landing-article"
    >
      <Row>
        {articleImage(7, 'landing-article-image-mid-cont',
          article, 'landing-article-image-mid')}
        <Col span={17}>
          <Row className="mid-article-data">
            <Col span={24}>
              <h4 className="mid-art-title">{article.title}</h4>
            </Col>
            {articleMetaData(createdAt, reading_time, rating)}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default MidLandingArticle;
