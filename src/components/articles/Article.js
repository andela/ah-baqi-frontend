import React from 'react';
import {
  Row, Col, Statistic, Popover, Icon, Rate,
} from 'antd';
import {
  Facebook, Twitter, Reddit, Email,
} from 'react-sharingbuttons';
import { user } from '../../containers/comments/helpers/helpers';
import IconText from './ArticleFooter';
import Comments from '../comments/Comments';
import Bookmark from '../../containers/bookmark/Bookmark';
import AuthorHeadData from './singlearticle/AuthorArticleData';
import 'react-sharingbuttons/dist/main.css';
import './landingPage/Singlearticle.scss';


const token = localStorage.getItem('token');
const Article = ({
  editClick, article, history, deleteAction, liking, beenLiked, value, rateArticle,
}) => {
  const urlShare = `https://ah-baqi.herokuapp.com//articles${article.slug}`;
  return (
    <div data-test="single-article">
      {user && (
      <span className="bookmark-icon-pos">
        <Bookmark slug={article.slug} />
      </span>
      )}
      <Row>
        <Col span={18} offset={3}>
          <Row>
            <Col span={24} className="general-article-cols">
              <AuthorHeadData
                articleData={article}
                onDelete={deleteAction}
                history={history}
                editClick={editClick}
              />
            </Col>
            <Col span={24} className="general-article-cols">
              <p className="article-title">
                {article.title}
              </p>
            </Col>
            <Col span={24} className="general-article-cols">
              <div className="article-description">
                {article.description}
              </div>
            </Col>
            {article.image ? (
              <Col span={24} className="general-article-cols article-image">
                <img src={article.image} alt={article.slug} />
              </Col>
            ) : null}
            <Col span={24} className="general-article-cols">
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: article.body }} // eslint-disable-line
              />
            </Col>
            <Col span={24} className="tag-cont" data-test="article tags">
              {article.tagList && article.tagList.map(tag => (
                <span key={tag} className="tag-disp">
                  {tag}
                </span>
              ))}
            </Col>
            <Col span={24} className="general-article-cols">
              <Row className="article-footer">
                <Col className="article-liking" span={4}>
                  <span> Rate this article  </span>
                  <br />
                  {token ? (
                    <Rate className="rating" onChange={rateArticle} defaultValue={+localStorage.getItem('rating')} />
                  ) : (
                    <Rate className="rating" onChange={rateArticle} value={0} />
                  )}
                </Col>
                <Col className="article-liking" span={4} push={2}>
                  <Statistic
                    className="statistic-size"
                    value={value}
                    valueStyle={{ fontSize: '22px', marginLeft: '8px', fontWeight: 'light' }}
                    prefix={(
                      <IconText
                        type="heart"
                        onClick={liking}
                        history={history}
                        slug={article.slug}
                        beenLiked={beenLiked}
                        theme="filled"
                        color="#ed4956"
                      />
                      )}
                  />
                </Col>
                <Col push={4} className="sharing-icon">
                  <Popover
                    placement="right"
                    content={
                      (
                        <div>
                          <Facebook url={urlShare} shareText={article.title} />
                          <Twitter url={urlShare} shareText={article.title} />
                          <Reddit url={urlShare} shareText={article.title} />
                          <Email url={urlShare} shareText={article.title} />
                        </div>
                      )}
                    trigger="hover"
                  >
                    <Icon className="share-icon" type="share-alt" />
                  </Popover>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="general-article-cols">
              <Row>
                <Col className="parent-comment">
                  <Col>
                    <Comments
                      comments={article.comments}
                      slug={article.slug}
                    />
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Article;
