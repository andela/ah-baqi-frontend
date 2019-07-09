import React from 'react';
import { Modal } from 'antd';
import '../auth/Authmodalbuttons.scss';
import SocialAuthModalButtons from '../auth/SocialAuthModalButtons';
import EmailModalButton from '../auth/EmailModalButton';
import Signup from '../auth/Signup';
import Login from '../auth/Login';

const AuthModal = ({
  showLoginForm = null,
  showSignupForm = null,
  authAction,
  submitSignup,
  submitLogin,
  visible,
  onCancel,
  google,
  facebook,
  twitter,
  onFailure,
}) => {
  const modalTitle = 'Welcome to Authors Haven';
  let modalData = '';
  switch (authAction) {
    case 'login': (
      modalData = (
        <div style={{ textAlign: 'center' }}>
          <SocialAuthModalButtons
            action="Login"
            googleResponse={google}
            facebookResponse={facebook}
            twitterResponse={twitter}
            onFailure={onFailure}
          />
          <EmailModalButton
            action="Login"
            clicked={showLoginForm}
            data-test="email-button-test"
          />
        </div>
      )
    );
      break;
    case 'signup': (
      modalData = (
        <div style={{ textAlign: 'center' }}>
          <SocialAuthModalButtons
            googleResponse={google}
            facebookResponse={facebook}
            twitterResponse={twitter}
            onFailure={onFailure}
            action="Signup"
          />
          <EmailModalButton
            action="Signup"
            clicked={showSignupForm}
          />
        </div>
      )
    );
      break;
    case 'signupForm':
      (

        modalData = (
          <div style={{ textAlign: 'center' }}>
            <Signup
              form-data="signup form"
              submit={submitSignup}
            />
          </div>
        )
      );
      break;
    case 'loginForm': (
      modalData = (
        <div style={{ textAlign: 'center' }}>
          <Login
            submit={submitLogin}
          />
        </div>
      )
    );
      break;

    default:
      break;
  }
  return (
    <Modal
      title={modalTitle}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      form-data="login form"
    >
      {modalData}
    </Modal>
  );
};

export default AuthModal;
