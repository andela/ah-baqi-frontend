import React from 'react';
import { Row, Col } from 'antd';

import DateReadTimeRate from '../singlearticle/readTimeAndDate';

const defaultImg = 'https://res.cloudinary.com/zonecc/image/upload/v1563479322/dummy%20ah/image-not-av_otvgko.png';

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
                  reading_time={reading_time} // eslint-disable-line
                  rating={rating}
                />
              </Col>
            </Row>
          </Row>
        </Row>
      </Col>
      <Col span={6} className="featured-artical-img-cont">
        <img
          src={article.image ? article.image : defaultImg}
          alt="Article Featured"
          className="featured-image-article"
        />
      </Col>
    </Row>
  );
};

export default FeaturedArticle;
