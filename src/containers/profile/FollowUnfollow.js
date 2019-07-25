import React from 'react';
import { connect } from 'react-redux';
import { fetchFollowers, unfollowUser, followUser } from '../../actions/followingActions';

export class UnconnectedFollowUnfollow extends React.Component {
  state = {
    labelText: '',
  }

  componentWillMount() {
    const { articleData, fetchFollowers } = this.props;
    const myFollowers = JSON.parse(localStorage.followers);
    if (localStorage.token && articleData.author != localStorage.user_id) {
      fetchFollowers(articleData.author);
      if (this.hasFollowed(localStorage.username, myFollowers)) {
        this.toggleState('Following');
      } else {
        this.toggleState('Follow');
      }
    }
  }

  hasFollowed = (username, arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].username === username) {
        return true;
      }
    }
    return false;
  }

  toggleState = (labelText) => {
    this.setState({
      labelText,
    });
  }

  handleFollowAction = () => {
    const { articleData, followUser, unfollowUser } = this.props;
    if (this.state.labelText === 'Follow') {
      this.setState({
        labelText: 'Following',
      });
      followUser(articleData.author);
    } else {
      this.setState({
        labelText: 'Follow',
      });
      unfollowUser(articleData.author);
    }
  }

  render() {
    return (
      <button
        data-test="follow-container"
        type="button"
        className="follow-button"
        onClick={this.handleFollowAction}
      >
        {this.state.labelText}
      </button>
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
    followUser,
    unfollowUser,
  },
)(UnconnectedFollowUnfollow);
