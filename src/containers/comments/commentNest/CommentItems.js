import React from 'react';
import { Avatar, Icon } from 'antd';

import { user, displayComments, editComment } from '../helpers/helpers';
import EditUserCommentForm from '../EditCommentContainer';
import SecondaryComment from './SecondaryComment';

export let commentItems;


export const getItems = (
  comments,
  slug,
  deleteComment,
  likeComment,
  dislikeComment,
) => {
  commentItems = comments.map(item => (
    <div key={item.id}>
      <p className="likes-message hide">
        <strong>
          Log in to like or dislike
        </strong>
      </p>
      <p>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        &nbsp;&nbsp;
        {item.author}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {new Date(Date.parse(item.created_at)).toUTCString()}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {item.author == user
          ? (
            <span>
&nbsp;&nbsp;
              <Icon
                type="edit"
                onClick={() => editComment(
                  `edit-field-${item.id}`,
                )}
              />
&nbsp;&nbsp;
              <Icon
                className="delete-icon"
                type="delete"
                onClick={() => deleteComment(item.id, slug)}
              />
            </span>
          )
          : null
        }
        &nbsp;&nbsp;&nbsp;&nbsp;
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
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Icon
          className={`dropdown-icon-${item.id}`}
          type="down"
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
        />

        &nbsp;&nbsp;&nbsp;&nbsp;
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
      <div className={`nested-comment-${item.id} hide`}>
        <SecondaryComment
          replies={item.replies}
          id={item.id}
          slug={slug}
        />
      </div>

    </div>
  ));
};
