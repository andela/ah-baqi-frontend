import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../home/Home';


describe('<Home /> component', () => {
  test('renders without crashing', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  });
});
