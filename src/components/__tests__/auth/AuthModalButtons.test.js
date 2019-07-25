import React from 'react';
import { shallow } from 'enzyme';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import AuthModalButtons from '../../auth/AuthModalButtons';
import SocialAuthModalButtons from '../../auth/SocialAuthModalButtons';
import EmailModalButton from '../../auth/EmailModalButton';
import { mockFn } from '../../../utils/testUtils';


describe('<authModalButtons /> component', () => {
  test('auth button renders correctly', () => {
    expect(shallow(<AuthModalButtons />).find("[data-test='auth-button-test']")).toHaveLength(1);
  });
});

describe('<SocialAuthModalButtons /> component', () => {
  const wrapper = shallow(<SocialAuthModalButtons
    twitterResponse={mockFn}
    facebookResponse={mockFn}
    googleResponse={mockFn}
  />);

  test('renders without crashing', () => {
    expect(wrapper.find("[data-test='social-button-test']")).toHaveLength(1);
    expect(wrapper.find('t')).toHaveLength(1);
    expect(wrapper.find('e')).toHaveLength(1);
  });

  test('facebook callback is called', () => {
    const facebook = wrapper.find(FacebookLogin);
    facebook.props().callback();
    expect(mockFn).toHaveBeenCalled();
    // testing the renderProp
    facebook.props().render({});
    expect(wrapper.find(AuthModalButtons).exists()).toBe(true);
  });

  test('google onSuccess is called', () => {
    const google = wrapper.find(GoogleLogin);
    google.props().onSuccess();
    expect(mockFn).toHaveBeenCalled();
    // testing the renderProp
    google.props().render({});
    expect(wrapper.find(AuthModalButtons).exists()).toBe(true);
  });

  test('should test twitter onClick is called', () => {
    const twitter = wrapper.find("[titter-button='twitter button']");
    twitter.props().clicked();
    expect(mockFn).toHaveBeenCalled();
  });
});

describe('<EmailModalButton /> component', () => {
  test('renders without crashing', () => {
    expect(shallow(<EmailModalButton />).find("[data-test='email-button-test']")).toHaveLength(1);
  });
});
