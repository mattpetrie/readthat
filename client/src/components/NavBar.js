import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from '../api/users';
import { getUsersPostVotes } from '../api/votes';
import { login, logout, isLoggedIn, getProfile } from '../utils/AuthService';

class NavBar extends Component {

  componentWillMount() {
    if (isLoggedIn()) {
      const profile = getProfile();
      //this.props.onGetUserFromServer(profile);
      getUserData(profile.authorId).then(data => {
        console.log(data)
        this.props.onGetUserFromServer(data)
      });
      getUsersPostVotes(profile.authorId)
        .then(postVotes => this.props.onGetUsersPostVotesFromServer(postVotes));
    } else {
      this.props.onUnmountUser();
    }
  }

  render() {
    const {
      profile,
      history,
      onUnmountUser,
      onGetUserFromServer,
    } = this.props;
    if (!profile.authorId && isLoggedIn()) {
      onGetUserFromServer(getProfile());
    }
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
          {profile.picture ?
            <li className='avatar'>
              <img src={profile.picture}  alt='avatar'/>
            </li> : '' }
          {profile.nickname ?
            <li className='username'>
              <p>{profile.nickname}</p>
            </li> : '' }
        </ul>
      </div>
  )
}
}

export default NavBar;
