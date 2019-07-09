import React from 'react';
import { shallow } from 'enzyme';
import { UnconnectedHeader } from '../../header/Header';
import AuthModal from '../../../components/modals/AuthModal';


const myMock = jest.fn();
const propsTest = {
  isLoggedIn: true,
  modals: {
    authAction: 'login',
  },
  onFailure: myMock,

};

describe('<Routes /> component', () => {
  const wrapper = shallow(<UnconnectedHeader {...propsTest} />);

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
