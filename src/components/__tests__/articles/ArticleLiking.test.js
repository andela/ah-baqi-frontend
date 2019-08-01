import React from 'react';
import { shallow } from 'enzyme';

import IconText from '../../articles/singlearticle/ArticleLiking';
import { mockFn, componentRenders } from '../../../utils/testUtils';

describe('<IconText /> component', () => {
  const props = {
    type: 'type',
    beenLiked: true,
    onClick: mockFn,
  };
  let wrapper = shallow(<IconText {...props} />);

  test('IconText renders correctly when liked', () => {
    componentRenders(wrapper, 'icon-text-liked');
    wrapper.props().children.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });
  test('IconText renders correctly when not liked', () => {
    wrapper = shallow(<IconText {...props} beenLiked={false} />);
    componentRenders(wrapper, 'icon-text-not-liked');
    wrapper.props().children.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });
});
