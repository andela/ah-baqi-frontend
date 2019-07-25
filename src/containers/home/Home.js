import React, { Component } from 'react';
import {
  Row, Col, Skeleton,
} from 'antd';
import { connect } from 'react-redux';

import { getAllArticles, getArticle } from '../../actions/articleActions';
import LandingArticles from '../../components/articles/LandingArticles';
import ArticlesScroll from '../../components/articles/articlesScroll';

class Home extends Component {
  componentDidMount() {
    const { history, getAllArticles, articleCount } = this.props; // eslint-disable-line
    history.push('/');
    !articleCount && getAllArticles(); // eslint-disable-line
  }

  handleClick = (slug) => {
    const { getArticle, articleData, history } = this.props; // eslint-disable-line
    articleData.id = 0;
    const urlTo = `/articles/${slug}`;
    getArticle(slug);
    history.push(urlTo);
  };

  fetchMoreData = (url) => {
    const { articleCount, articles, getAllArticles } = this.props; // eslint-disable-line
    if (articleCount > articles.length) {
      getAllArticles(url);
    }
  };

  render() {
    const { articles, nextPage, articleCount } = this.props;
    const loader = <Skeleton active data-test="skeleton-loader" />;
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
                <ArticlesScroll
                  fetchMoreData={this.fetchMoreData}
                  articles={articles}
                  nextPage={nextPage}
                  handleClick={this.handleClick}
                  dataLength={articles.length}
                  hasMore={articleCount > articles.length}
                />
              </Col>
              <Col span={8} push={1}>
                Popular articles
              </Col>
            </Row>
          </div>
        ) : loader }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles,
  articleData: state.article.articleData,
  nextPage: state.article.nextPage,
  articleCount: state.article.articleCount,
});

export default connect(mapStateToProps, { getAllArticles, getArticle })(Home);
