import React from 'react';
import { Icon } from 'antd';

const IconText = ({
  type, onClick, beenLiked, theme, history, slug,
}) => {
  if (beenLiked) {
    return (
      <p data-test="icon-text-liked">
        <Icon
          type={type}
          className="uploader-icon statistic-like"
          onClick={() => onClick(slug, history, '')}
          theme={theme}
        />
      </p>
    );
  }
  return (
    <p data-test="icon-text-not-liked">
      <Icon
        type={type}
        className="uploader-icon statistic-like"
        onClick={() => onClick(slug, history, '')}
      />
    </p>

  );
};

export default IconText;
