import React from 'react';

import { Row } from 'antd';
import './Landingarticles.scss';
import LeftLandindArticle from './landingPage/LeftLandindArticle';
import MiddleLandingArticles from './landingPage/MiddleLandingArticles';

const LandingArticles = (props) => {
  const { leftArticle, middleArticles, handleClick } = props;

  return (
    <Row>
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
    </Row>
  );
};

export default LandingArticles;
