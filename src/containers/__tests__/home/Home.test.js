import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../home/Home';
import store from '../../../utils/testUtils';


describe('<Home /> component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Home store={store} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('renders skeleton loader', () => {
    wrapper = wrapper.dive().dive();
    expect(wrapper.find("[data-test='skeleton-loader']")).toHaveLength(1);
  });
});
