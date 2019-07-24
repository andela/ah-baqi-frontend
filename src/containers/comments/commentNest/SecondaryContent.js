import React from 'react';
import { Avatar, Icon } from 'antd';

import EditUserCommentForm from '../EditCommentContainer';
import { user, editComment } from '../helpers/helpers';

const SecondaryContent = (props) => {
  const {
    replies,
    slug,
    id,
    deleteNestedCommentItem,
  } = props;

  const contentItem = replies.map(item => (
    <div key={item.id} className="nested-comment-item">
      <p>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        {' '}
        {item.author}
        {' '}
        {' '}
        {new Date(Date.parse(item.created_at)).toUTCString()}
        {' '}
        {item.author === user
          && (
            <span>
              <Icon
                type="edit"
                onClick={() => editComment(
                  `comment-edit-field-${item.id}`,
                )}
              />
              {' '}
              <Icon
                className="delete-icon"
                type="delete"
                onClick={() => deleteNestedCommentItem(slug, id, item.id)}
              />
            </span>
          )
        }
      </p>
      {item.body}
      <div className={`comment-edit-field-${item.id} hide`}>
        <EditUserCommentForm
          data-test="edit-user-form"
          btnClass={`btn-cancel-edit-${item.id}`}
          editorClass={`comment-edit-field-${item.id}`}
          body={item.body}
          commentId={id}
          slug={slug}
          replyId={item.id}
          isNest
        />
      </div>
    </div>
  ));
  return (
    <div data-test="nested-item">
      {contentItem}
    </div>
  );
};

export default SecondaryContent;
