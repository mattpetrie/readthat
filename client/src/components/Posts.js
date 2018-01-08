import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { getPostsData } from '../api/posts';

class Posts extends Component {

  getPosts() {
    getPostsData().then(posts => {
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
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Posts;
