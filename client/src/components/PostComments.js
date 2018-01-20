import React, { Component } from 'react';
import PostContainer from './containers/PostContainer'
import PostComment from './PostComment';
import AddPostCommentContainer from './containers/AddPostCommentContainer';
import { getPostData } from '../api/posts';
import { isLoggedIn } from '../utils/AuthService';

class PostComments extends Component {

  getPost() {
    getPostData(this.props.match.params.postId).then(post => {
      this.props.onGetPostFromServer(post);
    });
  }

  componentWillMount() {
    this.getPost();
  }

  render() {
    const currentPost = this.props.currentPost;
    if (!currentPost) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <PostContainer post={currentPost} commentsLink={false} key={currentPost.id} />
        <h3>Comments</h3>
        <div className="post-comments">
          { currentPost.postComments ? currentPost.postComments // WHY CONDITIONAL NECESSARY?
            .sort((a, b) => a.id - b.id)
            .map(comment =>
              <PostComment comment={comment} key={comment.id}/>)
            : ''
          }
        </div>
        <br /><br />
        {isLoggedIn() ?
          <AddPostCommentContainer postId={currentPost.id} />
          :
          <div className="log-in-to">... Log In to Add Comment ...</div>
        }
        <br /><br />
      </div>
    );
  }
}

export default PostComments;
