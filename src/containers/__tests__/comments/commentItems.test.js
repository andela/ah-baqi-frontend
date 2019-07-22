import React from 'react';
import { shallow } from 'enzyme';

import Content from '../../comments/commentNest/Content';

const deleteCommentMock = jest.fn();
const likeCommentMock = jest.fn();
const dislikeCommentMock = jest.fn();

const props = {
  comments: [],
  slug: 'my comment',
  deleteComment: deleteCommentMock,
  likeComment: likeCommentMock,
  dislikeComment: dislikeCommentMock,
};
describe('<Content />', () => {
  test('renders without error', () => {
    const wrapper = shallow(<Content {...props} />);
    expect(wrapper.find("[data-test='comment-item']")).toHaveLength(1);
  });
});
