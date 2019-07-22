import React from 'react';
import { Col, Row } from 'antd';
import MidLandingArticle from './MiddleLandingArticle';

const MiddleLandingArticles = ({ articles, clicked }) => (
  <Col sm={20} md={9} className="landing-article-container">
    <Row data-test="mid-landing-article">
      {articles.map(article => (
        <MidLandingArticle
          key={article.slug}
          article={article}
          clicked={clicked}
        />
      ))}
    </Row>
  </Col>
);

export default MiddleLandingArticles;
