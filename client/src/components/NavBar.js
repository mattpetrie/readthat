import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from '../api/users';
import { getUsersPostVotes } from '../api/votes';
import { login, logout, isLoggedIn, getProfile } from '../utils/AuthService';

class NavBar extends Component {

  componentWillMount() {
    if (isLoggedIn()) {
      const profile = getProfile();
      getUserData(profile.authorId).then(data => {
        console.log(data)
        this.props.onGetUserFromServer(data)
      });
    } else {
      this.props.onUnmountUser();
    }
  }

  render() {
    const {
      currentUser,
      history,
      onUnmountUser,
      onGetUserFromServer,
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
