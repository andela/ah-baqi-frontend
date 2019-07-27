import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Tooltip } from 'antd';
import { bindActionCreators } from 'redux';
import { getBookmarks, addBookmark, removeBookmark } from '../../actions/bookmarks';
import './bookmark.scss';

export class UnconnectedBookmark extends Component {
  componentWillMount() {
    const { getBookmarks } = this.props;
    getBookmarks();
  }

  checkBookmark = (bookmarks) => {
    const { addBookmark, slug, removeBookmark } = this.props;
    let bookmarkIcon = (
      <Tooltip
        placement="right"
        title={
          <span>Bookmark Article</span>}
      >
        <Icon
          type="book"
          className="bookmark-container-add-icon"
          data-test="bookmark-container-add-icon"
          onClick={() => addBookmark(slug)}
        />
      </Tooltip>
    );

    bookmarks.forEach(article => ( // eslint-disable-line
      article.slug === slug
      && (
        bookmarkIcon = (
          <Tooltip
            placement="right"
            title={
              <span>Remove Bookmark</span>}
          >
            <Icon
              type="book"
              className="bookmark-container-remove-icon"
              data-test="bookmark-container-remove"
              onClick={() => removeBookmark(slug)}
            />
          </Tooltip>
        )
      )
    ));
    return bookmarkIcon;
  }

  displayBookmark = () => {
    const { bookmarks, slug, addBookmark } = this.props;
    return Object.getOwnPropertyNames(bookmarks).length !== 0
      && (
        bookmarks.message
          ? (
            <Tooltip
              placement="right"
              title={
                <span>Bookmark Article</span>}
            >
              <Icon
                type="book"
                className="bookmark-container-add-icon"
                data-test="bookmark-container-add"
                onClick={() => addBookmark(slug)}
              />
            </Tooltip>
          )
          : this.checkBookmark(bookmarks['bookmarked articles'])
      );
  }

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
