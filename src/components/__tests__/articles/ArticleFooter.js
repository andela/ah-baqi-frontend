import React from 'react';
import { shallow } from 'enzyme';

import { IconText } from '../../articles/ArticleFooter';

describe('<IconText /> component', () => {
  const props = {
    type: 'type',
    beenLiked: true,
    onClick: jest.fn(),
  };
  const wrapper = shallow(
    <IconText
      type={props.type}
      beenLiked={props.beenLiked}
      onClick={props.onClick}
    />,
  );

  test('IconText renders correctly', () => {
    expect(wrapper.find("[data-test='icon-text']")).toHaveLength(1);
  });
});
