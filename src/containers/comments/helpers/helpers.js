import React from 'react';
import {
  Comment, Form, Button, List, Input,
} from 'antd';

const { TextArea } = Input;
export const user = localStorage.getItem('username');

export const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

export const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div className="text-editor-item">
    <Form.Item>
      <TextArea rows={3} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button className="add-comment" htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

export const displayComments = (commentClass, closeUpButton, openButton) => {
  document.querySelector(`.${commentClass}`).classList.toggle('hide');
  document.querySelector(`.${closeUpButton}`).classList.toggle('hide');
  document.querySelector(`.${openButton}`).classList.toggle('hide');
};

export const closeEditor = (editorClass) => {
  document.querySelector(`.${editorClass}`).classList.toggle('hide');
};

export const editComment = (editButton) => {
  document.querySelector(`.${editButton}`).classList.toggle('hide');
};

export const loginRequest = (message, item) => {
  message                                       // eslint-disable-line
    && document.querySelector(`.${item}`).classList.toggle('hide');
};
