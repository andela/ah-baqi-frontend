import React from 'react';
import { Icon } from 'antd';

export const IconText = ({
  type, onClick, beenLiked, color, theme,
}) => {
  if (beenLiked) {
    return (
      <p data-test="icon-text">
        <Icon
          type={type}
          className="single-article-icon"
          onClick={onClick}
          theme={theme}
          twoToneColor={color}
        />
      </p>
    );
  }
  return (
    <p data-test="icon-text">
      <Icon
        type={type}
        className="single-article-icon"
        onClick={onClick}
      />
    </p>

  );
};
