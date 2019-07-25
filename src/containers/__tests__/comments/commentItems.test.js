import React from 'react';
import { shallow } from 'enzyme';

import Content from '../../comments/commentNest/Content';
import { mockFn } from '../../../utils/testUtils';

const props = {
  comments: [],
  slug: 'my comment',
  deleteComment: mockFn,
  likeComment: mockFn,
  dislikeComment: mockFn,
};
describe('<Content />', () => {
  test('renders without error', () => {
    const wrapper = shallow(<Content {...props} />);
    expect(wrapper.find("[data-test='comment-item']")).toHaveLength(1);
  });
});
