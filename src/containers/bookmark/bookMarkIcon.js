import React from 'react';
import { Tooltip, Icon } from 'antd';

const bookMarkIcon = ({
  method, slug, classname, dataTest,
}) => (
  <Tooltip
    placement="right"
    title={
      <span>Bookmark Article</span>}
  >
    <Icon
      type="book"
      className={classname}
      data-test={dataTest}
      onClick={() => method(slug)}
    />
  </Tooltip>
);

export default bookMarkIcon;
