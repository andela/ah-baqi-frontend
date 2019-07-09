import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../../components/profile/UserProfile';
import './profile.scss';


import { getUserProfile } from '../../actions/profile/profile';

export class UnconnectedProfile extends Component {
  componentDidMount() {
    const username = localStorage.getItem('username');
    const { getUserProfile } = this.props; // eslint-disable-line 
    getUserProfile(username);
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="profile-container">
        <div className="profile-container-wrapper">
          <UserProfile myProfile={profile} />
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ userProfile }) => ({
  profile: userProfile.profiles,
});

export default connect(mapStateToProps, {
  getUserProfile,
})(UnconnectedProfile);
