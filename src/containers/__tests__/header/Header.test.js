import React from 'react';
import { shallow } from 'enzyme';
import { UnconnectedHeader } from '../../header/Header';
import AuthModal from '../../../components/modals/AuthModal';
import { mockFn } from '../../../utils/testUtils';

const propsTest = {
  isLoggedIn: true,
  modals: {
    authAction: 'login',
  },
  onFailure: mockFn,

};

describe('<Routes /> component', () => {
  const wrapper = shallow(<UnconnectedHeader {...propsTest} onFailure={mockFn} />);

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
