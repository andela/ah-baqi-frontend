import React from 'react';
import { shallow } from 'enzyme';

import PopDelete from '../../articles/singlearticle/PopDelete';
import { mockFn } from '../../../utils/testUtils';

describe('<UserProfile />', () => {
  test('renders without error', () => {
    const wrapper = shallow(<PopDelete onDelete={mockFn} />);
    expect(wrapper.find("[data-test='pop-delete']")).toHaveLength(1);
    wrapper.props().onConfirm();
    expect(mockFn).toHaveBeenCalled();
  });
});
