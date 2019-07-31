import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import { fetchFollowers, fetchFollowees } from '../../actions/followingActions';

export class UnconnectedFollowList extends React.Component {
  state = {
    followText: '',
    className: 'no-display',
    data: [],
  };

  componentWillMount() {
    const { fetchFollowees, fetchFollowers } = this.props;
    const userId = localStorage.user_id;
    fetchFollowees(userId);
    fetchFollowers(userId);
  }

  listFollows = (arr) => {
    const followList = [];
    for (let i = 0; i < arr.length; i++) {
      followList.push(arr[i].username);
    }
    return followList;
  };

  showFollows = (followType) => {
    this.setState({
      className: 'visible',
    });

    if (followType === 'following') {
      const followingList = this.listFollows(JSON.parse(localStorage.followees));
      this.changeFollowText(followingList, 'Following');
    } else if (followType === 'followers') {
      const followersList = this.listFollows(JSON.parse(localStorage.followers));
      this.changeFollowText(followersList, 'Followers');
    }
  };

  changeFollowText = (followList, text) => {
    this.setState({
      data: followList,
      followText: text,
    });
  }

  followersList = (className, data, followText) => (
    <List
      className={className}
      size="small"
      header={<div className="table-head">{followText}</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item className="list-item">{item}</List.Item>}
    />
  );

  render() {
    const following = localStorage.followeesCount;
    const followers = localStorage.followersCount;
    const { className, data, followText } = this.state;
    return (
      <div data-test="list-followers" className="profile-header-info-followers">
        <span data-test="follow-list-span-showfol" className="span-abit" onClick={() => this.showFollows('followers')} role="presentation">
          {followers}
          <span>Followers</span>
        </span>
        <span
          data-test="follow-list-span"
          className="span-abit"
          onClick={() => this.showFollows('following')}
          role="presentation"
        >
          {following}
          <span>Following</span>
        </span>
        {this.followersList(className, data, followText)}
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followees: state.article.followees,
});

export default connect(
  mapStateToProps,
  {
    fetchFollowers,
    fetchFollowees,
  },
)(UnconnectedFollowList);
