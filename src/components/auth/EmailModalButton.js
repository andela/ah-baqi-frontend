import React from 'react';
import AuthModalButton from './AuthModalButtons';

const EmailModalButton = (props) => {
  const { clicked, action } = props;
  return (
    <AuthModalButton data-test="email-button-test" iconType="mail" color="red" clicked={clicked}>
      <span className="spaceRight">
        {' '}
        {action}
        {' '}
      </span>
      {' '}
      with email
    </AuthModalButton>
  );
};

export default EmailModalButton;
