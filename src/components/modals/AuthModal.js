import React from 'react';
import { Modal } from 'antd';

import '../auth/Authmodalbuttons.scss';

import SocialAuthModalButtons from '../auth/SocialAuthModalButtons';
import EmailModalButton from '../auth/EmailModalButton';

const AuthModal = (props) => {
  const { visible, onCancel, authAction } = props;
  const modalTitle = 'Welcome to Authors Haven';
  let modalData = '';
  switch (authAction) {
    case 'login': (
      modalData = (
        <div style={{ textAlign: 'center' }}>
          <SocialAuthModalButtons
            action="Login"
            googleResponse={props.google}
            facebookResponse={props.facebook}
            twitterResponse={props.twitter}
            onFailure={props.onFailure}
          />
          <EmailModalButton action="Login" clicked={props.showLoginForm} />
        </div>
      )
    );
      break;

    case 'signup': (
      modalData = (
        <div style={{ textAlign: 'center' }}>
          <SocialAuthModalButtons
            googleResponse={props.google}
            facebookResponse={props.facebook}
            twitterResponse={props.twitter}
            action="Signup"
          />
          <EmailModalButton action="Signup" clicked={props.showSignupForm} />
        </div>
      )
    );
      break;
    case 'signupForm': (
      modalData = (
        <div style={{ textAlign: 'center' }} form-data="signup form">
          signup form
        </div>
      )
    );
      break;
    case 'loginForm': (

      modalData = (
        <div style={{ textAlign: 'center' }} form-data="login form">
          login form
        </div>
      )
    );
      break;

    default:
      break;
  }

  return (
    <Modal
      data-test="email-button-test"
      title={modalTitle}
      visible={visible}
      onCancel={onCancel}
      footer={false}
    >
      {modalData}
    </Modal>
  );
};

export default AuthModal;
