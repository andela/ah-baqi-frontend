import React from 'react';
import { shallow } from 'enzyme';
import { UnconnectedHeader } from '../header/Header';


describe('<Header />', () => {
  it('renders without fail', () => {
    const wrapper = shallow(<UnconnectedHeader />);
    expect(wrapper.find("[data-test='header-section']")).toHaveLength(1);
  });
});
