import React from 'react';
import PropTypes from 'prop-types';

import AuthModalButton from './AuthModalButtons';

const loginModalBtn = (props) => {
  const { clicked, action } = props;
  return (
    <AuthModalButton data-test="email-button-test" iconType="mail" color="red" clicked={clicked}>
      {' '}
      {action}
      {' '}
      with email
      {' '}
    </AuthModalButton>
  );
};

loginModalBtn.propTypes = {
  clicked: PropTypes.func,
  action: PropTypes.string.isRequired,
};

loginModalBtn.defaultProps = {
  clicked: null,
};

export default loginModalBtn;
