import React from 'react';
import { shallow } from 'enzyme';
import { UnconnectedFollowList } from '../../profile/ListFollowers';


describe('<FollowList /> ', () => {
  test('unconnected One', () => {
    const props = {
      fetchFollowees: jest.fn(),
      fetchFollowers: jest.fn(),
      onClick: jest.fn(),
    };
    const followees = [{ name: 'bill' }];
    const followers = [{ name: 'martin' }];
    const uncWrapper = shallow(<UnconnectedFollowList {...props} />);
    localStorage.setItem('followees', JSON.stringify(followees));
    uncWrapper.instance().showFollows('following');

    localStorage.setItem('followers', JSON.stringify(followers));
    uncWrapper.instance().showFollows('followers');
    uncWrapper.instance().followersList(
      'className',
      'data',
      'followText',
    ).props.renderItem([{}]);
    uncWrapper.find('.span-abit').at(0).simulate('click');
    uncWrapper.find('.span-abit').at(1).simulate('click');
    expect(uncWrapper.find("[data-test='list-followers']")).toHaveLength(1);
  });
});
