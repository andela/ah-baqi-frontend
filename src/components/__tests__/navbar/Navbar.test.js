import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../../navbar/Navbar';

describe('<Navbar /> component', () => {
  test('Navbar renders correctly for unauthenticated user', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('[data-test="unauthenticated-menu"]')).toHaveLength(1);
  });

  test('Navbar renders correctly for authenticated user', () => {
    localStorage.setItem('username', 'testUser');
    localStorage.setItem('token', 'testUserToken');
    localStorage.setItem('isLoggedIn', true);
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('[data-test="authenticated-menu"]')).toHaveLength(1);
  });
});
