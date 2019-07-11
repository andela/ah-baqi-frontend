import React from 'react';
import { Col, Icon } from 'antd';

const authModalButton = (props) => {
  const {
    clicked, color, iconType, theme, children,
  } = props;
  return (
    <Col className="auth-button" data-test="auth-button-test" onClick={clicked}>
      <Icon
        style={{
          fontSize: '16px',
          color,
        }}
        theme={theme}
        type={iconType}
      />
      {children}
    </Col>
  );
};

export default authModalButton;
