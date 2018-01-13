import React, { Component } from 'react';
import Post from './Post';
import PostComment from './PostComment';
import { getPostsData } from '../api/posts';

class PostComments extends Component {

  getPosts() {
    getPostsData().then(posts => {
      this.props.onPopulatePostsFromServer(posts);
    });
  }

  componentWillMount() {
    this.getPosts();
  }

  render() {
    const post = this.props.posts
      .find(post => post.id === parseInt(this.props.match.params.postId, 10));
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Post post={post} commentsLink={false} key={post.id} />
        <h2>Comments</h2>
        <div className="post-comments">
          {post.postComments
            .sort((a, b) => a.id - b.id)
            .map(comment =>
              <PostComment comment={comment} key={comment.id}/>)
          }
        </div>
      </div>
    );
  }
}

export default PostComments;
