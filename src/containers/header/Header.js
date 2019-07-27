import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthModal from '../../components/modals/AuthModal';
import Navbar from '../../components/navbar/Navbar';
import loginActions from '../../actions/loginActions';
import logoutActions from '../../actions/logoutActions';

import {
  formLoginAction,
  emailSignupAction,
  hideModalActions,
  formSignupAction,
  displayModalActions,
  emailLoginAction,
} from '../../actions/modalActions';
import signupActions from '../../actions/signupActions';
import {
  socialAuthActions,
  firebaseAuthAction,
} from '../../actions/socialAuthActions';
import searchActions from '../../actions/searchActions';

export const UnconnectedHeader = (props) => {
  const {
    signupActions, hideModalActions, formSignupAction, emailSignupAction, // eslint-disable-line
    authAction, visible, emailLoginAction, formLoginAction, socialAuthActions, // eslint-disable-line
    firebaseAuthAction, loginActions, logoutActions, searchActions, history } = props; // eslint-disable-line

  const handleSubmit = (event, formProp, action) => {
    event.preventDefault();
    formProp.validateFields((error, values) => {
      if (!error) {
        if (action === 'login') {
          loginActions(values, hideModalActions);
        } else if (action === 'signup') {
          signupActions(values, hideModalActions);
        }
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
        search={searchActions}
        history={history}
      />
      <AuthModal
        authAction={authAction}
        visible={visible}
        onCancel={hideModalActions}
        showSignupForm={formSignupAction}
        submitSignup={handleSubmit}
        showLoginForm={formLoginAction}
        google={socialAuthResponse}
        facebook={socialAuthResponse}
        twitter={firebaseAuthAction}
        onFailure={onFailure}
        submitLogin={handleSubmit}
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
    socialAuthActions,
    displayModalActions,
    logoutActions,
    hideModalActions,
    loginActions,
    emailSignupAction,
    firebaseAuthAction,
    formSignupAction,
    searchActions,
    signupActions,
    formLoginAction,
    emailLoginAction,
  },
)(withRouter(UnconnectedHeader));
