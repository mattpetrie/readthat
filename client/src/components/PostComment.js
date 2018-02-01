import React from 'react';
import timeago from 'timeago.js';
import CommentVoterContainer from './containers/CommentVoterContainer';

const PostComment = ({
  comment,
  postComments,
}) => {
  return (
    <div>
      <div className="comment">
        <CommentVoterContainer
          comment={comment}
        />
        <div>
          {comment.body}
          {
            <div className="byline">
              <br />
              <span>
                Submitted by {comment.author ? comment.author.nickname : 'you'}
                {' ' + timeago().format(comment.createdAt)}
              </span>
            </div>
          }
        </div>
      </div>
      <div className="indent-comments">
        <div className="indent"></div>
        <div className="post-comments">
          { postComments ? postComments // WHY CONDITIONAL NECESSARY?
            .filter(el => el.parent === comment.id)
            .sort((a, b) => a.id - b.id)
            .map(comment =>
              <PostComment comment={comment} postComments={postComments} key={comment.id}/>)
            : ''
          }
        </div>
      </div>
    </div>
)}


export default PostComment;
