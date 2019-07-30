import React, { Component } from 'react';
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

class UnconnectedHeader extends Component {
  handleSubmit = (event, formProp, action) => {
    const { signupActions, loginActions, hideModalActions } = this.props; // eslint-disable-line
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

  socialAuthResponse = (response, provider) => {
    const { socialAuthActions, hideModalActions } = this.props; // eslint-disable-line
    const authData = {
      token_provider: 'google-oauth2',
      access_token: response.accessToken,
    };

    if (provider === 'facebook') {
      authData.token_provider = 'facebook';
    }
    socialAuthActions(authData, provider, hideModalActions);
  };

  onFailure = () => 'failed';

  render() {
    const {
      hideModalActions, formSignupAction, emailSignupAction, // eslint-disable-line
      authAction, visible, emailLoginAction, formLoginAction, socialAuthActions, // eslint-disable-line
      firebaseAuthAction, logoutActions, searchActions, history } = this.props; // eslint-disable-line

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
          submitSignup={this.handleSubmit}
          showLoginForm={formLoginAction}
          google={this.socialAuthResponse}
          facebook={this.socialAuthResponse}
          twitter={firebaseAuthAction}
          onFailure={this.onFailure}
          submitLogin={this.handleSubmit}
        />
      </div>
    );
  }
}


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
