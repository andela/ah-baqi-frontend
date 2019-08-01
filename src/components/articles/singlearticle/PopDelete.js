import React from 'react';
import { Popconfirm, Icon } from 'antd';

const PopDelete = ({
  onDelete, slug, history,
}) => (
  <Popconfirm
    data-test="pop-delete"
    title="Are you sure you want to delete this article?"
    onConfirm={() => onDelete(slug, history)}
    okText="Yes"
    cancelText="No"
  >
    <Icon type="delete" />
    {' '}
      Delete
  </Popconfirm>
);

export default PopDelete;
