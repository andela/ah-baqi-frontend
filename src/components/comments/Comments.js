import React from 'react';
import CoomentContainer from '../../containers/comments/Comments';

const CommentLoop = props => (
  <div data-test="comment-overview">
    <CoomentContainer {...props} />
  </div>
);

export default CommentLoop;
