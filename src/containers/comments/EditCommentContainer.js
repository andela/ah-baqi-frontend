import React from 'react';
import {
  Form, Input, Button, Icon,
} from 'antd';
import { connect } from 'react-redux';
import { closeEditor } from './helpers/helpers';

import { editCommentItem, editNestedCommentItem } from '../../actions/comments';

const { TextArea } = Input;

class EditForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, isNest } = this.props;
    form.validateFields((err, values) => {
      const newComment = {
        comment: {
          body: values.body,

        },
      };
      isNest ? this.editNestComment(newComment) : this.editNormalComment(newComment); // eslint-disable-line
    });
  };

  editNestComment = (value) => {
    const {
      slug, commentId, replyId, editNestedCommentItem,
    } = this.props;
    editNestedCommentItem(slug, commentId, replyId, value);
  };

  editNormalComment = (value) => {
    const { slug, id, editCommentItem } = this.props;
    editCommentItem(slug, id, value);
  };

  render() {
    const { btnClass, editorClass, body } = this.props;
    const { form } = this.props;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} data-test="edit-container">
        <Form.Item data-test="textarea-container">
          {form.getFieldDecorator('body', { initialValue: `${body}` })(<TextArea rows={3} />)}
        </Form.Item>
        <Form.Item data-test="submit-button-container">
          <Button type="link" htmlType="submit" onClick={() => closeEditor(editorClass)}>
            <Icon type="check-circle" className="edit-buttons" />
          </Button>
          <Button
            data-test="submit-button"
            className={btnClass}
            type="link"
            onClick={() => closeEditor(editorClass)}
          >
            <Icon type="close-circle" className="edit-buttons" />
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  prop: state,
});

export const UnconnectedEditUserCommentForm = Form.create({ name: 'edit_form' })(EditForm);
export default connect(mapStateToProps, {
  editCommentItem,
  editNestedCommentItem,
})(UnconnectedEditUserCommentForm);
