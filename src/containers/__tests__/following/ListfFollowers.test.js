import React from 'react';
import { shallow } from 'enzyme';
import { UnconnectedFollowList } from '../../profile/ListFollowers';


describe('<FollowList /> ', () => {
  test('unconnected One', () => {
    const fetchFolloweesMock = jest.fn();
    const fetchFollowersMock = jest.fn();
    const props = {
      fetchFollowees: fetchFolloweesMock,
      fetchFollowers: fetchFollowersMock,
    };
    const followees = [{ name: 'bill' }];
    const followers = [{ name: 'martin' }];
    const uncWrapper = shallow(<UnconnectedFollowList {...props} />);
    localStorage.setItem('followees', JSON.stringify(followees));
    uncWrapper.instance().showFollows('following');

    localStorage.setItem('followers', JSON.stringify(followers));
    uncWrapper.instance().showFollows('followers');
    uncWrapper.instance().followersList(
      'className', 'data', 'followText',
    ).props.renderItem([{}]);
    expect(uncWrapper.find(
      "[data-test='list-followers']")).toHaveLength(1);
  });
});
