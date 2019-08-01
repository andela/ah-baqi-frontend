import React from 'react';
import { Icon } from 'antd';

const customIcon = (classname, type, onclick) => (
  <Icon
    className={classname}
    type={type}
    onClick={onclick}
  />
);

export default customIcon;
