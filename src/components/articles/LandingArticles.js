import React from 'react';

import { Row, Col } from 'antd';
import './Landingarticles.scss';
import LeftLandindArticle from './landingPage/LeftLandindArticle';
import MiddleLandingArticles from './landingPage/MiddleLandingArticles';
import './Featuredarticles.scss';

const LandingArticles = (props) => {
  const { leftArticle, middleArticles, handleClick } = props;

  return (
    <Row>
      <Col span={24}>
        <LeftLandindArticle
          article={leftArticle}
          clicked={handleClick}
          data-test="left-landing-article"
        />
        <MiddleLandingArticles
          articles={middleArticles}
          clicked={handleClick}
          data-test="middle-landing-article"
        />
      </Col>
      <Col span={24}>
        <div className="shadow" />
        <h3 className="featured-title">
          <span>Featured Articles</span>
        </h3>
      </Col>
    </Row>
  );
};

export default LandingArticles;
