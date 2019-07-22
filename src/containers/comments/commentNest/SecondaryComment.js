import React from 'react';
import { Comment, Icon } from 'antd';
import { connect } from 'react-redux';

import { Editor } from '../helpers/helpers';
import SecondaryContent from './SecondaryContent';
import {
  addNestedComment,
  deleteNestedCommentItem,
} from '../../../actions/comments';
import '../comments.scss';


export class UnconnectedSecondaryComment extends React.Component {
  state = {
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    const { value } = this.state;
    if (!value) {
      return;
    }
    this.setState({
      submitting: true,
    });
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
      });
    }, 1000);
    const commentValue = {
      comment: {
        body: value,
      },
    };
    const {
      slug,
      id,
      addNestedComment,
    } = this.props;
    addNestedComment(slug, commentValue, id);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addContent = () => {
    const { value, submitting } = this.state;

    return (
      <div>
        <SecondaryContent {...this.props} />
        <div className="nest-text-editor">
          <Editor
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div data-test="comments-items-container">
        <Comment
          data-test="comments-container-content"
          content={this.addContent()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prop: state,
});

export default connect(mapStateToProps, {
  addNestedComment,
  deleteNestedCommentItem,
})(UnconnectedSecondaryComment);
