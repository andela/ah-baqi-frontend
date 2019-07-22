import React from 'react';
import { Icon } from 'antd';

const DateReadTimeRate = ({ createdAt, reading_time }) => { // eslint-disable-line
  const date = new Date(createdAt);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDay();

  return (
    <span data-test="read-time-date-rate">
      <span>
        {month}
        {' '}
      </span>
      <span>
        {day}
        {' '}
        .
        {' '}
      </span>
      <span>
        {reading_time} {/* eslint-disable-line */}
        {' '}
        read
        {' '}
      </span>
      <span className="rating-icons-pos">
        <Icon type="star" theme="filled" style={{ color: 'black', fontSize: '12px' }} />
      </span>
    </span>
  );
};

export default DateReadTimeRate;
