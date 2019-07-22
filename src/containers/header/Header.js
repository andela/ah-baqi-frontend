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

export const UnconnectedHeader = (props) => {
  const {
    signupActions, hideModalActions, formSignupAction, emailSignupAction, // eslint-disable-line
    authAction, visible, emailLoginAction, formLoginAction, socialAuthActions, // eslint-disable-line
    firebaseAuthAction, loginActions, logoutActions } = props; // eslint-disable-line

  const handleSignupSubmit = (event, formProp) => {
    event.preventDefault();
    formProp.validateFields((error, values) => {
      if (!error) {
        signupActions(values, hideModalActions);
      }
    });
  };

  const handleLoginSubmit = (event, formProp) => {
    event.preventDefault();
    formProp.validateFields((error, values) => {
      if (!error) {
        loginActions(values, hideModalActions);
      }
    });
  };

  const socialAuthResponse = (response, provider) => {
    const authData = {
      token_provider: 'google-oauth2',
      access_token: response.accessToken,
    };

    if (provider === 'facebook') {
      authData.token_provider = 'facebook';
    }
    socialAuthActions(authData, provider, hideModalActions);
  };

  const onFailure = () => 'failed';

  return (
    <div data-test="header-section">
      <Navbar
        clickedSignup={emailSignupAction}
        clickedLogin={emailLoginAction}
        logOut={logoutActions}
      />
      <AuthModal
        authAction={authAction}
        visible={visible}
        onCancel={hideModalActions}
        showSignupForm={formSignupAction}
        submitSignup={handleSignupSubmit}
        showLoginForm={formLoginAction}
        google={socialAuthResponse}
        facebook={socialAuthResponse}
        twitter={firebaseAuthAction}
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
