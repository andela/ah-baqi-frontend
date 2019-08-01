import React from 'react';

import FollowList from '../../containers/profile/ListFollowers';

const ProfileHead = ({ myProfile, EditProfile }) => (
  <div className="profile-header-component">
    <div className="profile-name-holder">
      <div className="profile-header-info">
        <div className="profile-header-info-header">
          <div className="profile-header-info-username">
            <strong>
                {myProfile.profile.first_name ? myProfile.profile.first_name : 'John'} {/*eslint-disable-line */}
              {' '}
                {myProfile.profile.last_name ? myProfile.profile.last_name : 'Doe'} {/*eslint-disable-line */}
            </strong>
            <br />
            <span>{myProfile.profile.username}</span>
          </div>
          <div className="profile-header-info-edit"><EditProfile myProfile={myProfile} /></div>
        </div>
        <div className="profile-header-info-bio">{myProfile.profile.bio}</div>
        <br />
        <div className="profile-header-info-followers">
          <FollowList />
        </div>
      </div>
    </div>
    <div className="profile-pic-holder">
      <img
        data-test="default-image"
        src={myProfile.profile.image}
        alt="profile Pic"
      />
    </div>
  </div>
);

export default ProfileHead;
