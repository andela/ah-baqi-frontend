import React from 'react';
import { Col, Row } from 'antd';
import DateReadTimeRate from '../components/articles/singlearticle/readTimeAndDate';

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
