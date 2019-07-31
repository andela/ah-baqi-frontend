import React from 'react';

import {
  user,
  displayComments,
  editComment,
  editCommentForm,
  commentHeader,
} from '../helpers/helpers';
import SecondaryComment from './SecondaryComment';
import customIcon from '../../../utils/icons';

const utilityButtons = (item, slug, deleteComment, likeComment, dislikeComment) => (
  <span className="utility-buttons">
    {item.author === user
          && (
          <span
            className="utility-buttons"
            data-test="utility-buttons-tesone"
          >
            {customIcon('edit-comment-item-btn', 'edit', () => editComment(
              `edit-field-${item.id}`,
            ))}
            {customIcon('delete-icon', 'delete', () => deleteComment(item.id, slug))}
          </span>
          )}
    {customIcon('comment-rating-likes', 'like', () => likeComment(slug, item.id))}
    {item.likes}
    {customIcon('comment-rating-dislikes', 'dislike', () => dislikeComment(slug, item.id))}
    {item.dislikes}
    {customIcon(`dropdown-icon-${item.id}`, 'message', () => displayComments(
      `nested-comment-${item.id}`,
      `close-up-${item.id}`,
      `dropdown-icon-${item.id}`,
    ))}
    {customIcon(`close-up-${item.id} hide`, 'up', () => displayComments(
      `nested-comment-${item.id}`,
      `close-up-${item.id}`,
      `dropdown-icon-${item.id}`,
    ))}
  </span>
);

const Content = ({
  comments, slug, deleteComment, likeComment, dislikeComment,
}) => {
  const commentItems = comments.map(item => (
    <div
      key={item.id}
      className="comment-item-container"
      data-test="comment-item-cont"
    >
      {commentHeader(item)}
      {utilityButtons(item, slug, deleteComment, likeComment, dislikeComment)}
      <div>
        {item.body}
        {editCommentForm(item, slug)}
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
