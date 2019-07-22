import React, { Component } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { connect } from 'react-redux';

import { getAllArticles, getArticle } from '../../actions/articleActions';
import LandingArticles from '../../components/articles/LandingArticles';
import FeaturedArticles from '../../components/articles/FeaturedArticles';

class Home extends Component {
  handleClick = (slug) => {
    const { getArticle, articleData, history } = this.props; // eslint-disable-line
    articleData.id = 0;
    const urlTo = `/articles/${slug}`;
    getArticle(slug);
    history.push(urlTo);
  };

  render() {
    const { articles, getAllArticles } = this.props; // eslint-disable-line
    getAllArticles();

    return (
      <div className="container-body">
        {articles.length ? (
          <div>
            <LandingArticles
              middleArticles={articles.slice(1, 4)}
              leftArticle={articles[0]}
              handleClick={this.handleClick}
              data-test="landing-articles"
            />
            <div className="shadow" />
            <Row>
              <Col span={15}>
                <FeaturedArticles
                  handleClick={this.handleClick}
                  articles={articles.slice(4)}
                  data-test="featured-articles"
                />
              </Col>
              <Col span={8} push={1}>
                Popular articles
              </Col>
            </Row>
          </div>
        ) : <Skeleton active data-test="skeleton-loader" /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles,
  articleData: state.article.articleData,
  nextPage: state.article.nextPage,
  previousPage: state.article.articles,
  articleCount: state.article.articleCount,
});

export default connect(mapStateToProps, { getAllArticles, getArticle })(Home);
