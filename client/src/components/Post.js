import React from 'react';

const Post = ({
  post,
}) =>
<div className="post">
  { post.url ?
    <div>
    <a href={post.url} target="_blank" className={post.new ? 'post-title new' : 'post-title'}>
      {post.title}
    </a><br />
    <span className="post-url">({post.url})</span>
  </div>
    :
    <div className={post.new ? 'post-title new' : 'post-title'}>
      {post.title}
    </div>
  }
  {post.body ? <div className="post-body">{post.body}</div> : ''}
  <div className="comment-count">{post.postComments.length} comments</div>
</div>


export default Post;
