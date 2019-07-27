import React from 'react';

import { user, editComment, commentHeader, editNestedCommentForm } from '../helpers/helpers';
import customIcon from '../../../utils/icons';

const SecondaryContent = ({
  replies, slug, id, deleteNestedCommentItem,
}) => {
  const contentItem = replies.map(item => (
    <div key={item.id} className="nested-comment-item">
      {commentHeader(item)}
      {item.author === user && (
      <span className="utility-buttons">
        {customIcon('', 'edit', () => editComment(
          `comment-edit-field-${item.id}`,
        ))}
        {customIcon('delete-icon', 'delete', () => deleteNestedCommentItem(slug, id, item.id))}
      </span>
      )}
      <p>{item.body}</p>
      {editNestedCommentForm(item, id, slug)}
    </div>
  ));
  return (
    <div data-test="nested-item">
      {contentItem}
    </div>
  );
};

export default SecondaryContent;
