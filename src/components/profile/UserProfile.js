import React from 'react';
import { Icon } from 'antd';
import EditProfile from '../../containers/profile/EditProfile';
import './profile.scss';

const UserProfile = (props) => {
  const propItems = props;

  const profileRenderLogic = ({ profile }) => { // eslint-disable-line 
    return (
      <div>
        <div className="profile-header-component">
          <div className="profile-name-holder">
            <div className="profile-header-info">
              <div className="profile-header-info-header">
                <div className="profile-header-info-username">
                  <strong>
                    {profile.first_name ? profile.first_name : 'John'} {/*eslint-disable-line */}
&nbsp;
                    {profile.last_name ? profile.last_name : 'Doe'} {/*eslint-disable-line */}
                  </strong>
                  <br />
                  <span>{profile.username}</span>
                </div>
                <div className="profile-header-info-edit"><EditProfile {...propItems} /></div>
              </div>
              <div className="profile-header-info-bio">{profile.bio}</div>
              <br />
              <div className="profile-header-info-followers"> 7 followers &nbsp;&nbsp;&nbsp;  1 Following</div>
            </div>
          </div>
          <div className="profile-pic-holder">
            <img
              src={`${profile.image}`}
              onError={(e) => {
                e.target.src = 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png';
              }}
              alt="profile Pic"
            />
          </div>
        </div>
        <div className="profile-content-component">
          <p>Profile</p>
          <h2>Latest</h2>
          <div className="profile-content-component-articles">
            <div className="profile-content-component-articles-header">
              <div className="profile-content-component-articles-pic">
                <img
                  className="profile-content-component-articles-picitem"
                  src={`${profile.image}`}
                  onError={(e) => {
                    e.target.src = 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png';
                  }}
                  alt="Profile Pic"
                />
              </div>
              <div className="profile-content-component-articles-postedon">
                {profile.first_name ? profile.first_name : 'Name'} {/*eslint-disable-line */}
                {profile.last_name ? profile.last_name : 'Name'} {/*eslint-disable-line */}
                <br />
                <p>July 1st  3min read</p>

              </div>
            </div>
            <div className="profile-content-component-articles-contentpic">
              <img src="https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001" alt="profile pic" />
            </div>
            <br />
            <h1>When the Rubber Meets the Road</h1>
            <div>
              <p className="profile-content-component-articles-myarticle">
Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever
              since the 1500s, when an unknown printer took a
              </p>
            </div>
            <br />
            <div>
              <Icon type="like" />
&nbsp;50 &nbsp;&nbsp;&nbsp;
              <Icon type="dislike" />
&nbsp;5
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderProfile = () => (
    props.myProfile ? profileRenderLogic(props.myProfile) : null
  );
  return (
    <div data-test="user-profile-overview">
      {renderProfile()}
    </div>
  );
};

export default UserProfile;
