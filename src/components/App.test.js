import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('RootComponent', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
