import React from 'react';
import { Col, Row } from 'antd';
import { articleMetaData } from '../../../utils/articleElements';

const newArticleDefImage = 'https://res.cloudinary.com/zonecc/image/upload/v1563436267/dummy%20ah/digitization-2076994_1280_q126vd.png';

const LeftLandingArticle = ({ article, clicked }) => {
  const { createdAt, reading_time, rating } = article; // eslint-disable-line

  return (
    <Col
      sm={20}
      md={12}
      className="landing-article-container article-hover"
      onClick={() => clicked(article.slug)}
      data-test="left-landing-article"
    >
      <Col span={24} className="landing-article-image-container">
        <img
          src={article.image ? article.image : newArticleDefImage}
          className="landing-article-image"
          alt="article-default"
        />
      </Col>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <h1 className="left-art-title">{article.title}</h1>
          </Col>
          <Col span={24} className="left-art-desc">
            {article.description.substr(0, 100)}
          </Col>
          {articleMetaData(createdAt, reading_time, rating)}
        </Row>
      </Col>
    </Col>
  );
};

export default LeftLandingArticle;
