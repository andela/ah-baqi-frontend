import React from 'react';
import { Icon } from 'antd';

import './profile.scss';

const IconText = ({ type, text }) => (
  <span data-test="icon-text">
    <Icon type={type} className="icon-text" />
    {' '}
    {text}
  </span>
);

export default IconText;
