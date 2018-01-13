import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import AddPostContainer from './containers/AddPostContainer'
import { getPostsData } from '../api/posts';
import { getProfile, isLoggedIn, login, logout } from '../utils/AuthService';

class Posts extends Component {

  getPosts() {
    getPostsData().then(posts => {
      if (isLoggedIn()) { console.log(getProfile()); }
      this.props.onPopulatePostsFromServer(posts);
    });
  }

  componentWillMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="posts">
        <h1 className="title">Posts</h1>
        {this.props.posts.sort((a, b) => a.id - b.id).map(post =>
          <Post post={post} commentsLink={true} key={post.id}/>)}
        <br /><br />
        {isLoggedIn() ?
          (
            <div>
              <AddPostContainer />
              <div className="centered">
                <button onClick={() => logout(this.props.history)}>Log out</button>
              </div>
            </div>
          )
          :
          ( <div className="centered">
              <button onClick={() => login()}>Log In to Add Post</button>
            </div> )
        }
        <br /><br />
        <Link to='/'><div className="centered">Home</div></Link>

      </div>
    );
  }
}

export default Posts;
