import React from 'react';
import { shallow } from 'enzyme';

import AuthModalButtons from '../auth/AuthModalButtons';
import SocialAuthModalButtons from '../auth/SocialAuthModalButtons';
import EmailModalButton from '../auth/EmailModalButton';


describe('<authModalButtons /> component', () => {
  test('auth button renders correctly', () => {
    expect(shallow(<AuthModalButtons />).find("[data-test='auth-button-test']")).toHaveLength(1);
  });
});

describe('<SocialAuthModalButtons /> component', () => {
  test('renders without crashing', () => {
    expect(shallow(<SocialAuthModalButtons />).find("[data-test='social-button-test']")).toHaveLength(1);
  });
});

describe('<EmailModalButton /> component', () => {
  test('renders without crashing', () => {
    expect(shallow(<EmailModalButton />).find("[data-test='email-button-test']")).toHaveLength(1);
  });
});
