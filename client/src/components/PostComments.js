import React from 'react';
import Post from './Post';
import PostComment from './PostComment';

const PostComments = ({
  post,
}) =>
<div>
  <Post post={post} key={post.id} />
  <h2>Comments</h2>
  <div className="post-comments">
    {this.props.post.postComments
      .sort((a, b) => a.id - b.id)
      .map(comment =>
        <PostComment comment={comment} key={comment.id}/>)
    }
  </div>
</div>


export default Post;
