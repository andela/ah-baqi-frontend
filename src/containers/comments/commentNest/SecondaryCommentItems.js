import React from 'react';
import { Avatar, Icon } from 'antd';

import EditUserCommentForm from '../EditCommentContainer';
import { user, editComment } from '../helpers/helpers';

export let commentItems;
export const getNestedItems = (
  replies,
  slug,
  id,
  deleteNestedCommentItem,
) => {
  commentItems = replies.map(item => (
    <div key={item.id}>
      <p>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        {item.author === user
          ? (
            <span>
&nbsp;&nbsp;
              <Icon
                type="edit"
                onClick={() => editComment(
                  `comment-edit-field-${item.id}`,
                )}
              />
&nbsp;&nbsp;
              <Icon
                className="delete-icon"
                type="delete"
                onClick={() => deleteNestedCommentItem(slug, id, item.id)}
              />
            </span>
          )
          : null
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
};
