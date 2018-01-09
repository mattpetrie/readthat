import React from 'react';

const bodyStyle = {
  'fontSize': '10px',
  'textIndent': '25px',
};

const Post = ({
  post,
}) =>
<div>
  { post.url ?
    <a href={post.url} target="_blank" className={post.new ? 'new' : ''}>
      {post.title}
    </a>
    :
    <div className={post.new ? 'new' : ''}>
      {post.title}
    </div>
  }
  {post.body ? <div style={bodyStyle}>{post.body}</div> : ''}
</div>


export default Post;
