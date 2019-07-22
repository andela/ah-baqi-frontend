import React from 'react';
import { Avatar, Icon } from 'antd';

import { user, displayComments, editComment } from '../helpers/helpers';
import EditUserCommentForm from '../EditCommentContainer';
import SecondaryComment from './SecondaryComment';

const Content = (props) => {
  const {
    comments,
    slug,
    deleteComment,
    likeComment,
    dislikeComment,
  } = props;

  const commentItems = comments.map(item => (
    <div key={item.id} className="comment-item-container">
      <p className="likes-message hide">
        <strong>
          Log in to like or dislike
        </strong>
      </p>
      <p>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />{' '}
        {item.author}{' '}{' '}
        {new Date(Date.parse(item.created_at)).toUTCString()}
        {' '}
        {item.author === user
          && (
            <span className="utility-buttons">
              {' '}
              <Icon
                type="edit"
                onClick={() => editComment(
                  `edit-field-${item.id}`,
                )}
              />{' '}
              <Icon
                className="delete-icon"
                type="delete"
                onClick={() => deleteComment(item.id, slug)}
              />
            </span>
          )
        }{' '}{' '}
        <Icon
          className="comment-rating-likes"
          type="like"
          onClick={() => likeComment(slug, item.id)}
        />
        {item.likes}
        <Icon
          className="comment-rating-dislikes"
          type="dislike"
          onClick={() => dislikeComment(slug, item.id)}
        />
        {item.dislikes}
        {' '} {' '} {' '}
        <Icon
          className={`dropdown-icon-${item.id}`}
          type="message"
          onClick={() => displayComments(
            `nested-comment-${item.id}`,
            `close-up-${item.id}`,
            `dropdown-icon-${item.id}`,
          )}
        />
        <Icon
          className={`close-up-${item.id} hide`}
          type="up"
          onClick={() => displayComments(
            `nested-comment-${item.id}`,
            `close-up-${item.id}`,
            `dropdown-icon-${item.id}`,
          )}
        />{' '}{' '}
      </p>
      <div>
        {item.body}
        <div className={`edit-field-${item.id} hide`}>
          <EditUserCommentForm
            btnClass={`cancel-edit-${item.id}`}
            editorClass={`edit-field-${item.id}`}
            body={item.body}
            id={item.id}
            slug={slug}
            isNest={false}
          />
        </div>
      </div>
      <div className={`nested-comment-${item.id} hide nested`}>
        <SecondaryComment
          replies={item.replies}
          id={item.id}
          slug={slug}
        />
      </div>
    </div>
  ));
  return (
    <div data-test="comment-item">
      {commentItems}
    </div>
  );
};

export default Content;
