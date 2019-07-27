import React from 'react';
import { Col, Row } from 'antd';
import DateReadTimeRate from '../components/articles/singlearticle/readTimeAndDate';

const defaultImg = 'https://res.cloudinary.com/zonecc/image/upload/v1563479322/dummy%20ah/image-not-av_otvgko.png';

export const articleMetaData = (createdAt, readingTime, rating) => (
  <Row>
    <Col
      span={24}
      className="mid-article-author"
    >
              Mona Eltahawy in ZORA
    </Col>
    <Row className="mid-article-read-date">
      <Col span={24}>
        <DateReadTimeRate
          createdAt={createdAt}
          reading_time={readingTime} // eslint-disable-line
          rating={rating}
        />
      </Col>
    </Row>
  </Row>
);

export const articleImage = (span, className, article, imgClassName) => (
  <Col span={span} className={className}>
    <img
      src={article.image ? article.image : defaultImg}
      alt="Article Featured"
      className={imgClassName}
    />
  </Col>
);
