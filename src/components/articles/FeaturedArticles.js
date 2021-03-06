import React from 'react';
import { Row } from 'antd';
import FeaturedArticle from './featured/FeaturedArticle';
import './Featuredarticles.scss';

const FeaturedArticles = ({ articles, handleClick }) => {
  let articleData = '';
  if (articles) {
    articleData = articles.map(article => (
      <FeaturedArticle
        data-test="single-featured-article"
        clicked={handleClick}
        key={article.slug}
        article={article}
      />
    ));
  }

  return (
    <div data-test="featured-article">
      <Row>
        <div className="featured-wrapper">
          {articleData}
        </div>
      </Row>
    </div>
  );
};

export default FeaturedArticles;
