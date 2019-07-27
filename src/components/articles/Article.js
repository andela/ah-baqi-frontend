import React from 'react';
import {
  Row, Col, Statistic, Rate,
} from 'antd';
import { user } from '../../containers/comments/helpers/helpers';
import IconText from './singlearticle/ArticleLiking';
import Comments from '../comments/Comments';
import Bookmark from '../../containers/bookmark/Bookmark';
import AuthorHeadData from './singlearticle/AuthorArticleData';
import SharingIcons from './singlearticle/articleSharing';
import 'react-sharingbuttons/dist/main.css';
import './landingPage/Singlearticle.scss';
import { articleDispItem } from '../../utils/articleElements';


const token = localStorage.getItem('token');
const Article = ({
  editClick, article, history, deleteAction, liking, beenLiked, value, rateArticle,
}) => (
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
          {articleDispItem('article-title', article.title)}
          {articleDispItem('article-description', article.description)}
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
                <SharingIcons slug={article.slug} title={article.title} />
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

export default Article;
