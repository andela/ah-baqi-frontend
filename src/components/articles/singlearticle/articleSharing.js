import React from 'react';
import { Popover, Icon } from 'antd';
import { Facebook, Twitter, Reddit, Email } from 'react-sharingbuttons';

const sharingIcons = ({ slug, title }) => {
  const urlShare = `https://ah-baqi.herokuapp.com//articles${slug}`;
  return (
    <Popover
      placement="right"
      data-test="article-sharing"
      content={
        (
          <div>
            <Facebook url={urlShare} shareText={title} />
            <Twitter url={urlShare} shareText={title} />
            <Reddit url={urlShare} shareText={title} />
            <Email url={urlShare} shareText={title} />
          </div>
        )}
      trigger="hover"
    >
      <Icon className="share-icon" type="share-alt" />
    </Popover>
  );
};

export default sharingIcons;
