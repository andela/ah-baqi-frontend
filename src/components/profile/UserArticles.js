import React from 'react';
import {
  List, Avatar,
} from 'antd';

import IconText from './IconText';
import PopDelete from '../articles/singlearticle/PopDelete';

const UserArticles = ({
  userArticles, history, myProfile, deleteArticle, handleClick,
}) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={userArticles}
    data-test="articles-list"
    renderItem={item => (
      <List.Item
        key={item.title}
        data-test="article-list-item"
        actions={[
          <IconText type="heart" text={item.likes} />,
          <IconText type="message" text={item.comments.length} />,
          <PopDelete
            onDelete={deleteArticle}
            slug={item.slug}
            history={history}
          />,
        ]}
        extra={(
          <img
            width={270}
            height={170}
            alt="article"
            src={item.image}
          />
        )}
      >
        <List.Item.Meta
          avatar={<Avatar src={myProfile.profile.image} />}
          title={<button type="button" className="article-hover-title" onClick={e => handleClick(e, item.slug)}>{item.title}</button>}
          description={item.description.substr(0, 150)}
        />
      </List.Item>
    )}
  />
);

export default UserArticles;
