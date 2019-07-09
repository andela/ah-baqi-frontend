import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes';

describe('<Routes /> component', () => {
  test('renders routes successfully', () => {
    expect(shallow(<Routes />)).toHaveLength(1);
  });
});
