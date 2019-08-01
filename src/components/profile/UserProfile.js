import React from 'react';
import { Skeleton } from 'antd';

import EditProfile from '../../containers/profile/EditProfile';
import ProfileHead from './ProfileHeader';
import UserArticles from './UserArticles';
import './profile.scss';

const UserProfile = (props) => {
  const {
    myProfile, userArticles, getArticle, deleteArticle, history,
  } = props;

  const handleClick = (e, slug) => {
    e.preventDefault();
    const urlTo = `/articles/${slug}`;
    getArticle(slug);
    history.push(urlTo);
  };

  const loader = <Skeleton active />;

  return (
    <div data-test="user-profile-overview">
      {myProfile ? (
        <div>
          <ProfileHead myProfile={myProfile} EditProfile={EditProfile} />
          <div className="profile-content-component" data-test="user-articles">
            <h2>Your posts</h2>
            <br />
            {userArticles && (
              <UserArticles
                userArticles={userArticles}
                history={history}
                myProfile={myProfile}
                deleteArticle={deleteArticle}
                handleClick={handleClick}
              />
            )}
          </div>
        </div>
      ) : loader }
    </div>
  );
};

export default UserProfile;
