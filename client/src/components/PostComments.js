import React, { Component } from 'react';
import Post from './Post';
import PostComment from './PostComment';
import AddPostCommentContainer from './containers/AddPostCommentContainer';
import { getPostData } from '../api/posts';
import { getProfile, isLoggedIn, login, logout } from '../utils/AuthService';

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
    console.log(currentPost);
    if (!currentPost) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Post post={currentPost} commentsLink={false} key={currentPost.id} />
        <h2>Comments</h2>
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
          (
            <div>
              <AddPostCommentContainer postId={currentPost.id} />
              <div className="centered">
                <button onClick={() => logout(this.props.history)}>Log out</button>
              </div>
            </div>
          )
          :
          ( <div className="centered">
              <button onClick={() => login()}>Log In to Add Comment</button>
            </div> )
        }
        <br /><br />
      </div>
    );
  }
}

export default PostComments;
