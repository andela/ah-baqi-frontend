import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header/Header';

jest.mock('react-redux');

describe('<Header />', () => {
  it('renders without fail', () => {
    const wrapper = shallow(<Header.reactComponent />);
    expect(wrapper.find("[data-test='header-section']")).toHaveLength(1);
  });
});
