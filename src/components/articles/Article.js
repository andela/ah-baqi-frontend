import React from 'react';
import { Row, Col, Statistic } from 'antd';
import {IconText} from './ArticleFooter';
import Comments from '../comments/Comments';
import AuthorHeadData from './singlearticle/AuthorArticleData';
import './landingPage/Singlearticle.scss';

const Article = ({
  editClick, article, history, deleteAction, liking, beenLiked, value,
}) => (
  <div data-test="single-article">
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
                <Statistic
                  className="statistic-size"
                  value={value}
                  prefix={(
                    <IconText
                      type="heart"
                      onClick={liking}
                      beenLiked={beenLiked}
                      theme="twoTone"
                      color="#ed4956"
                    />
)}
                />
              </Col>
              <Col className="article-liking" push={16} span={4}>
                  Rating
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
