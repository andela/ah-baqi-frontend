import React from 'react';
import { shallow } from 'enzyme';

import IconText from '../../articles/ArticleFooter';

describe('<IconText /> component', () => {
  const props = {
    type: 'type',
    beenLiked: true,
    onClick: jest.fn(),
  };
  let wrapper = shallow(
    <IconText
      type={props.type}
      beenLiked={props.beenLiked}
      onClick={props.onClick}
    />,
  );

  test('IconText renders correctly when liked', () => {
    expect(wrapper.find("[data-test='icon-text-liked']")).toHaveLength(1);
  });
  test('IconText renders correctly when not liked', () => {
    wrapper = shallow(
      <IconText
        type={props.type}
        beenLiked={false}
        onClick={props.onClick}
      />,
    );
    expect(wrapper.find("[data-test='icon-text-not-liked']")).toHaveLength(1);
  });
});
