import React from 'react';
import { Comment, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Content from './commentNest/Content';
import { Editor, closeEditor } from './helpers/helpers';
import {
  addComment,
  deleteComment,
  likeComment,
  dislikeComment,
} from '../../actions/comments';
import './comments.scss';


export class UnconnectedCoomentContainer extends React.Component {
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
    const { slug, addComment } = this.props;
    addComment(slug, commentValue);
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
        <div className="text-editor-tab hide">
          <Editor
            data-test="comment-item-editor"
            className="text-editor"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
          />
        </div>
        <Content {...this.props} />
      </div>
    );
  }

  render() {
    return (
      <div data-test="comments-container">
        <Comment
          data-test="comments-container-content"
          avatar={(
            <Icon
              type="message"
              className="msg-icon"
              onClick={() => closeEditor('text-editor-tab')}
            />
)}
          content={this.addContent()}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  prop: state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment,
  deleteComment,
  likeComment,
  dislikeComment,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedCoomentContainer);
