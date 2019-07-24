import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserProfile from '../../components/profile/UserProfile';
import './profile.scss';
import { deleteArticle, getArticle } from '../../actions/articleActions';
import { getUserProfile, getUserArticles } from '../../actions/profileActions';

export class UnconnectedProfile extends Component {
  componentDidMount() {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('user_id');
    const { getUserProfile, getUserArticles } = this.props; // eslint-disable-line
    getUserProfile(username);
    getUserArticles(userId);
  }

  handleArticleClick = (e, slug) => {
    const { history, getArticle } = this.props; // eslint-disable-line
    e.preventDefault();
    const urlTo = `/articles/${slug}`;
    getArticle(slug);
    history.push(urlTo);
  }

  render() {
    const { profile, userArticles, deleteArticle, history } = this.props;  // eslint-disable-line
    return (
      <div className="profile-container">
        <div className="profile-container-wrapper">
          <UserProfile
            myProfile={profile}
            userArticles={userArticles}
            deleteArticle={deleteArticle}
            getArticle={getArticle}
            history={history}
            onEditClick={this.handleEditClick}
            handleClick={this.handleArticleClick}
          />
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ userProfile }) => ({
  profile: userProfile.profiles,
  userArticles: userProfile.userArticles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserProfile,
  getUserArticles,
  deleteArticle,
  getArticle,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedProfile);
