import React from 'react';
import { Tooltip, Icon } from 'antd';

const bookMarkIcon = (title, className, dataTest, onClick) => (
  <Tooltip
    placement="right"
    title={
      <span>{title}</span>}
  >
    <Icon
      type="book"
      className={className}
      data-test={dataTest}
      onClick={onClick}
    />
  </Tooltip>
);

export default bookMarkIcon;
