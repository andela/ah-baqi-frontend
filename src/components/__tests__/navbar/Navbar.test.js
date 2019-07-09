import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../../navbar/Navbar';


describe('<Navbar /> component', () => {
  test('renders without crashing', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.exists()).toBe(true);
  });
});
