import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthModal from '../../components/modals/AuthModal';
import Navbar from '../../components/navbar/Navbar';

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

const Header = ({
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
      />
    </div>
  );
};


const mapStateToProps = state => ({
  ...state.modals,
  ...state.login,
});

Header.propTypes = {
  hideModalActions: PropTypes.func.isRequired,
  emailSignupAction: PropTypes.func.isRequired,
  formSignupAction: PropTypes.func.isRequired,
  authAction: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  signupActions: PropTypes.func.isRequired,
};

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
  },
)(Header);
