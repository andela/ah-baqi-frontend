import React from 'react';

import { Col, Icon } from 'antd';

const AuthModalButton = (props) => {
  const {
    clicked, color, theme, iconType, children,
  } = props;
  return (
    <Col className="AuthButton" data-test="auth-button-test" onClick={clicked}>
      <Icon
        style={{ fontSize: '16px', color }}
        theme={theme}
        type={iconType}
      />
      {children}
    </Col>
  );
};

export default AuthModalButton;
