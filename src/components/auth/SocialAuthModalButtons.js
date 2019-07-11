import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import AuthModalButton from './AuthModalButtons';

const customHeader = {};
customHeader.Test = 'test-header';

const SocialAuthModalButtons = (props) => {
  const {
    twitterResponse,
    facebookResponse,
    googleResponse,
    action, disabled, onFailure,
  } = props;

  const googgleClientId = '1005118583442-8vl6g21ovisrkasced1n5ea0vpcms2ge.apps.googleusercontent.com';
  const facebookAppId = '424643588295726';
  return (
    <div data-test="social-button-test">
      <AuthModalButton
        titter-button="twitter button"
        iconType="twitter"
        color="#08c"
        clicked={twitterResponse}
      >
        <span className="spaceRight">
          {action}
          {' '}
        </span>
        {' '}
        with twitter
      </AuthModalButton>
      <FacebookLogin
        facebook-button="facebook button"
        appId={facebookAppId}
        autoLoad={false}
        fields="name,email,picture"
        callback={response => facebookResponse(response, 'facebook')}
        render={renderProps => (
          <AuthModalButton
            iconType="facebook"
            color="#3C5A99"
            clicked={renderProps.onClick}
            theme="filled"
          >
            <span className="spaceRight">
              {action}
              {' '}
            </span>
            {' '}
            with Facebook
          </AuthModalButton>
        )}
      />
      <GoogleLogin
        google-button="google button"
        clientId={googgleClientId}
        disabled={disabled}
        onSuccess={response => googleResponse(response, 'google')}
        onFailure={onFailure}
        render={renderProps => (
          <AuthModalButton
            clicked={renderProps.onClick}
            disabled={renderProps.disabled}
            iconType="google"
            color="#4285F4"
          >
            <span className="spaceRight">
              {action}
              {' '}
            </span>
            {' '}
            with Google
          </AuthModalButton>
        )}
      />
    </div>
  );
};

export default SocialAuthModalButtons;
