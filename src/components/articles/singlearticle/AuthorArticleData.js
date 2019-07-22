import React from 'react';
import {
  Row, Col, Button, Popconfirm,
} from 'antd';

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
              <button type="button" className="follow-button">Follow</button>
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
        <Col span={6} offset={5}>
          {+localStorage.user_id === articleData.author
            ? (
              <span>
                {' '}
                <Button onClick={event => editClick(event)}>Edit</Button>
                {' '}
                <Popconfirm
                  title="Are you sure you want to delete this article?"
                  onConfirm={() => onDelete(articleData.slug, history)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="danger" ghost>Delete</Button>
                </Popconfirm>
              </span>
            ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default AuthorHeadData;
