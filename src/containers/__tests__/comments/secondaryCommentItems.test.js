import React from 'react';
import { shallow } from 'enzyme';

import SecondaryContent from '../../comments/commentNest/SecondaryContent';
import { mockFn } from '../../../utils/testUtils';

const props = {
  replies: [],
  slug: 'my comment',
  id: 'id',
  deleteNestedCommentItem: mockFn,
};
describe('<SecondaryContent />', () => {
  test('renders without error', () => {
    const wrapper = shallow(<SecondaryContent {...props} />);
    expect(wrapper.find("[data-test='nested-item']")).toHaveLength(1);
  });
});
