import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import AddPostContainer from './containers/AddPostContainer'
import { getPostsData } from '../api/posts';

import { getProfile, isLoggedIn } from '../utils/AuthService';

class Posts extends Component {

  getPosts() {
    getPostsData().then(posts => {
      if (isLoggedIn()) { console.log(getProfile()); }
      this.props.onPopulatePostsFromServer(posts);
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="posts">
        <h1>Posts</h1>
        {this.props.posts.sort((a, b) => a.id - b.id).map(post => <Post post={post} key={post.id}/>)}
        <br /><br />
        <AddPostContainer />
        <br /><br />
        <Link to='/'>Home</Link>

      </div>
    );
  }
}

export default Posts;
