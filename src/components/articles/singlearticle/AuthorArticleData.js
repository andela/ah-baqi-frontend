import React from 'react';
import {
  Row, Col, Button, Icon, Rate,
} from 'antd';
import FollowUnfollow from '../../../containers/profile/FollowUnfollow';

import PopDelete from './PopDelete';

const AuthorHeadData = ({
  onDelete, articleData, history, editClick,
}) => {
  const date = new Date(articleData.createdAt);
  return (
    <div data-test="author-data">
      <Row>
        <Col span={3}>
          <img
            className="author-image"
            src="https://res.cloudinary.com/zonecc/image/upload/v1563334380/dummy%20ah/hack-creativity_gzyqqp.jpg"
            alt="author-name"
          />
        </Col>
        <Col span={8}>
          <Row className="name-and-reads">
            <Col className="name-and-follow">
              <span className="author-name">John Doe</span>
              <FollowUnfollow
                articleData={articleData}
              />
            </Col>
            <Col className="created-and-read">
              {date.toLocaleString('default', { month: 'long' })}
              {' '}
              {date.getDay()}
              {' '}
              .
              {' '}
              {articleData.reading_time}
              {' '}
              read
              {' '}

            </Col>
          </Row>
        </Col>
        <Col span={3} className="pad-top-rate">
          <Rate className="rating" defaultValue={+articleData.rating} disabled />
        </Col>
        <Col span={6} offset={2} className="pad-top-rate">
          {+localStorage.user_id === articleData.author
            ? (
              <span>
                {' '}
                <Button onClick={event => editClick(event)}>
                  <Icon type="edit" />
                  {' '}
                  Edit
                </Button>
                {' '}
                <span className="pop-delete">
                  <PopDelete
                    onDelete={onDelete}
                    slug={articleData.slug}
                    history={history}
                  />
                </span>
              </span>
            ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default AuthorHeadData;
