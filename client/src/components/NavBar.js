import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn, getProfile } from '../utils/AuthService';

const NavBar = ({
  profile,
  history,
  onUnmountUser,
  onGetUserFromServer,
}) => {
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
)}

export default NavBar;
