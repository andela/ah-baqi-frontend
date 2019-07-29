import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookmarks, addBookmark, removeBookmark } from '../../actions/bookmarks';
import './bookmark.scss';
import bookMarkIcon from './bookMarkIcon';

export class UnconnectedBookmark extends Component {
  componentWillMount() {
    const { getBookmarks } = this.props;
    getBookmarks();
  }

  checkBookmark = (bookmarks) => {
    const { addBookmark, slug, removeBookmark } = this.props;
    let bookmarkIcon;
    bookmarks.forEach(article => ( // eslint-disable-line
      article.slug === slug
        ? (
          bookmarkIcon = bookMarkIcon('Remove Bookmark',
            'bookmark-container-remove-icon',
            'bookmark-container-remove',
            () => removeBookmark(slug))
        ) : (
          bookmarkIcon = bookMarkIcon('Bookmark Article',
            'bookmark-container-add-icon',
            'bookmark-container-add-icon',
            () => addBookmark(slug))
        )
    ));
    return bookmarkIcon;
  };

  displayBookmark = () => {
    const { bookmarks } = this.props;
    return Object.getOwnPropertyNames(bookmarks).length !== 0
      && (
        bookmarks.message
          ? (
            this.checkBookmark
          )
          : this.checkBookmark(bookmarks['bookmarked articles'])
      );
  };

  render() {
    return (
      <div
        data-test="bookmark-container"
        className="bookmark-container"
      >
        {this.displayBookmark()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookmarks: state.bookmarks.bookmarks,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getBookmarks,
  addBookmark,
  removeBookmark,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedBookmark);
