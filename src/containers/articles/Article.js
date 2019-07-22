import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Skeleton } from 'antd';
import { getArticle, deleteArticle } from '../../actions/articleActions';
import Article from '../../components/articles/Article';

class ArticlePage extends Component {
  componentDidMount() {
    const { articleData, getArticle, history } = this.props; // eslint-disable-line
    if (!articleData.id) {
      const slug = history.location.pathname.split('/')[2];
      getArticle(slug);
    }
  }

  handleEditClick = () => {
    const { articleData, getArticle, history } = this.props; // eslint-disable-line
    getArticle(articleData.slug);
    history.push('/articles/update');
  }

  render() {
    const { articleData, deleteArticle, history } = this.props;  // eslint-disable-line

    return (
      <div data-test="article page test">
        {articleData.id ? (
          <Article
            editClick={this.handleEditClick}
            article={articleData}
            deleteAction={deleteArticle}
            history={history}
          />
        ) : <Skeleton active />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articleData: state.article.articleData,
});

export default connect(mapStateToProps, { getArticle, deleteArticle })(ArticlePage);
