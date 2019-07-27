import React from 'react';
import { Col, Row } from 'antd';
import { articleMetaData } from '../../../utils/articleElements';

const defImage = 'https://res.cloudinary.com/zonecc/image/upload/v1563436762/dummy%20ah/try-new_peb1rk.jpg';

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
        <Col span={7} className="landing-article-image-mid-cont">
          <img
            src={article.image ? article.image : defImage}
            alt="Article Middle"
            className="landing-article-image-mid"
          />
        </Col>
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
