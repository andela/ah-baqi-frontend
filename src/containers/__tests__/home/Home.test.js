import React from 'react';
import { shallow } from 'enzyme';
import { Skeleton } from 'antd';
import store from '../../../utils/testUtils';
import Home from '../../home/Home';

describe('<Home /> component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Home
      store={store}
    />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.dive().dive().find(Skeleton)).toHaveLength(1);
  });
});
