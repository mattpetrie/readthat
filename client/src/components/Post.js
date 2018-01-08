import React from 'react';

const Post = ({
  post,
}) => <div className={post.new ? 'new' : ''}>{post.title}</div>

export default Post;
