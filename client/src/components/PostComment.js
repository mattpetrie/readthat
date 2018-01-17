import React from 'react';
import timeago from 'timeago.js';

const PostComment = ({
  comment,
}) =>

<div className="comment">
  {comment.body}
  {comment.author ?
    <div className="byline">
    <br />
    <span>
      Submitted by {comment.author.nickname} {timeago().format(comment.createdAt)}
    </span>
  </div> : '' }
</div>


export default PostComment;
