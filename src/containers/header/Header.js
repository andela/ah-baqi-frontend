import React from 'react';
import { connect } from 'react-redux';
import AuthModal from '../../components/modals/AuthModal';
import Navbar from '../../components/navbar/Navbar';
import loginActions from '../../actions/loginActions';
import logoutActions from '../../actions/logoutActions';

import {
  displayModalActions,
  hideModalActions,
  emailSignupAction,
  formSignupAction,
  emailLoginAction,
  formLoginAction,
} from '../../actions/modalActions';
import signupActions from '../../actions/signupActions';
import {
  socialAuthActions,
  firebaseAuthAction,
} from '../../actions/socialAuthActions';

export const UnconnectedHeader = ({
  signupActions,
  hideModalActions,
  formSignupAction,
  emailSignupAction,
  authAction,
  visible,
  emailLoginAction,
  formLoginAction,
  socialAuthActions,
  firebaseAuthAction,
  loginActions, logoutActions,
}) => {
  const handleCancel = () => {
    hideModalActions();
  };
  const handleSignupSubmit = (event, formProp) => {
    event.preventDefault();
    formProp.validateFields((error, values) => {
      if (!error) {
        signupActions(values, handleCancel);
      }
    });
  };

  const signupUserHandler = (data) => {
    signupActions(data);
  };

  const showSignupFormHandler = () => {
    formSignupAction();
  };

  const signupModalsHandler = () => {
    emailSignupAction();
  };

  const loginModalsHandler = () => {
    emailLoginAction();
  };

  const showLoginFormHandler = () => {
    formLoginAction();
  };

  const loginUserHandler = (data) => {
    loginActions(data);
  };

  const logOutUserHandler = () => {
    logoutActions();
  };

  const handleLoginSubmit = (event, formProp) => {
    event.preventDefault();
    formProp.validateFields((error, values) => {
      if (!error) {
        loginActions(values, handleCancel);
      }
    });
  };

  const handleFirebaseTwitter = () => {
    firebaseAuthAction(handleCancel);
  };

  const socialAuthResponse = (response, provider) => {
    const authData = {
      token_provider: 'google-oauth2',
      access_token: response.accessToken,
    };

    if (provider === 'facebook') {
      authData.token_provider = 'facebook';
    }
    socialAuthActions(authData, provider, handleCancel);
  };

  const onFailure = () => 'failed';

  return (
    <div data-test="header-section">
      <Navbar
        clickedSignup={signupModalsHandler}
        clickedLogin={loginModalsHandler}
        logOut={logOutUserHandler}
      />
      <AuthModal
        authAction={authAction}
        visible={visible}
        onCancel={handleCancel}
        showSignupForm={showSignupFormHandler}
        signup={signupUserHandler}
        submitSignup={handleSignupSubmit}
        showLoginForm={showLoginFormHandler}
        login={loginModalsHandler}
        google={socialAuthResponse}
        facebook={socialAuthResponse}
        twitter={handleFirebaseTwitter}
        onFailure={onFailure}
        submitLogin={handleLoginSubmit}
      />
    </div>
  );
};


const mapStateToProps = state => ({
  ...state.modals,
  ...state.login,
});

export default connect(
  mapStateToProps,
  {
    displayModalActions,
    hideModalActions,
    emailSignupAction,
    formSignupAction,
    signupActions,
    emailLoginAction,
    formLoginAction,
    socialAuthActions,
    firebaseAuthAction,
    loginActions,
    logoutActions,
  },
)(UnconnectedHeader);
