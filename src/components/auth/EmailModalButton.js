import React from 'react';
import AuthModalButton from './AuthModalButtons';

const loginModalBtn = (props) => {
  const { clicked, action } = props;
  return (
    <AuthModalButton data-test="email-button-test" iconType="mail" color="red" clicked={clicked}>
      {' '}
      {action}
      {' '}
      with username
      {' '}
    </AuthModalButton>
  );
};

export default loginModalBtn;
