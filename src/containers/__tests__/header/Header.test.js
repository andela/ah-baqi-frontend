import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { UnconnectedHeader } from '../../header/Header';
import AuthModal from '../../../components/modals/AuthModal';
import store, { mockFn } from '../../../utils/testUtils';

const props = {
  isLoggedIn: true,
  modals: {
    authAction: 'login',
  },
  onFailure: mockFn,
};

describe('<Routes /> component', () => {
  const wrapper = mount(
    <BrowserRouter>
      <UnconnectedHeader
        store={store}
        {...props}
      />
    </BrowserRouter>,
  );

  test('renders routes successfully', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(AuthModal).exists()).toBe(true);
    expect(wrapper.find('Navbar').exists()).toBe(true);
  });

  test('header has authmodal', () => {
    const authmodal = wrapper.find(AuthModal);
    expect(authmodal).toHaveLength(1);
    authmodal.props().onFailure();
  });
});
