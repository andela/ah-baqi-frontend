import React from 'react';
import PropTypes from 'prop-types';
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

authModalButton.propTypes = {
  clicked: PropTypes.func,
  color: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  theme: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

authModalButton.defaultProps = {
  clicked: null,
  theme: null,
};

export default authModalButton;
