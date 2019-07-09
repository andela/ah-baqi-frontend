import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import AuthModal from '../../components/modals/AuthModal';
import Navbar from '../../components/navbar/Navbar';

import {
  displayModalActions,
  hideModalActions,
  emailSignupAction,
  emailLoginAction,
  formLoginAction,
  formSignupAction,
} from '../../actions/modalActions';
import {
  socialAuthActions,
  firebaseAuthAction,
} from '../../actions/socialAuthActions';

class Header extends Component {
  handleCancel = () => {
    this.props.hideModalActions();
  };

  signupModalsHandler = () => {
    this.props.emailSignupAction();
  };

  loginModalsHandler = () => {
    this.props.emailLoginAction();
  };

  showLoginFormHandler = () => {
    this.props.formLoginAction();
  }

  showSignupFormHandler = () => {
    this.props.formSignupAction();
  }

  handleFirebaseTwitter = () => {
    this.props.firebaseAuthAction(this.handleCancel);
  }

  socialAuthResponse = (response, provider) => {
    const authData = {
      token_provider: 'google-oauth2',
      access_token: response.accessToken,
    };

    if (provider === 'facebook') {
      authData.token_provider = 'facebook';
    }
    this.props.socialAuthActions(authData, provider, this.handleCancel);
  }

  onFailure = () => {

  };

  render() {
    const { isLoggedIn, modals } = this.props;
    return (
      <div data-test="header-section">
        <Navbar
          clickedLogin={this.loginModalsHandler}
          clickedSignup={this.signupModalsHandler}
          isLoggedIn={isLoggedIn}
        />

        <AuthModal
          authAction={modals.authAction}
          visible={modals.visible}
          onCancel={this.handleCancel}
          showLoginForm={this.showLoginFormHandler}
          showSignupForm={this.showSignupFormHandler}
          login={this.loginUserHandler}
          google={this.socialAuthResponse}
          facebook={this.socialAuthResponse}
          twitter={this.handleFirebaseTwitter}
          onFailure={this.onFailure}
        />

        {isLoggedIn ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  modals: state.modals,
});

export default connect(
  mapStateToProps,
  {
    displayModalActions,
    hideModalActions,
    emailSignupAction,
    emailLoginAction,
    formLoginAction,
    formSignupAction,
    socialAuthActions,
    firebaseAuthAction,
  },
)(Header);
