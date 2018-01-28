import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from '../api/users';
import { login, logout, isLoggedIn, getProfile } from '../utils/AuthService';

class NavBar extends Component {

  isUserLoggedIn() {
    if (isLoggedIn()) {
      const profile = getProfile();
      if (profile.authorId !== this.props.currentUser.authorId) {
        getUserData(profile.authorId).then(data => {
          this.props.onGetUserFromServer(data)
        });
      }
    } else if (!isLoggedIn() && this.props.currentUser.authorId) {
      this.props.onUnmountUser();
    }
  }

  componentWillMount() {
    this.isUserLoggedIn();
  }

  componentWillUpdate() {
    this.isUserLoggedIn();
  }

  render() {
    const {
      currentUser,
      history,
      onUnmountUser,
    } = this.props;

    return (
      <div className="navbar">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li style={{float:"right"}}>
            {(isLoggedIn()) ?
              <button
                onClick={() => {
                  onUnmountUser();
                  logout(history);
                }}>
                Log out
              </button>
              :
              <button
                onClick={() => login()}>
                Log In
              </button>}
          </li>
          {currentUser.picture ?
            <li className='avatar'>
              <img src={currentUser.picture}  alt='avatar'/>
            </li> : '' }
          {currentUser.nickname ?
            <li className='username'>
              <p>{currentUser.nickname}</p>
            </li> : '' }
        </ul>
      </div>
  )
}
}

export default NavBar;
