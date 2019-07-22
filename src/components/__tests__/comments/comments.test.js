import React from 'react';
import { shallow } from 'enzyme';
import CommentLoop from '../../comments/Comments';


describe('<CommentLoop />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CommentLoop />);
  });
  test('renders without error', () => {
    expect(wrapper.find("[data-test='comment-overview']")).toHaveLength(1);
  });
});
