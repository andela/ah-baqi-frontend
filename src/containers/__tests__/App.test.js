import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Sample tests to make circle ci build pass', () => {
  test('renders without crashing', () => {
    const appComponent = shallow(<App />);

    expect(appComponent.exists()).toBe(true);
  });
});
