
import React from 'react';
import { shallow } from 'enzyme';

import IconText from '../../profile/IconText';
import { mockFn } from '../../../utils/testUtils';

describe('<UserProfile />', () => {
  test('renders without error', () => {
    const wrapper = shallow(<IconText onDelete={mockFn} />);
    expect(wrapper.find("[data-test='icon-text']")).toHaveLength(1);
  });
});
