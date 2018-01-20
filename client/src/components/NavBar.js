import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn, getProfile } from '../utils/AuthService';
//logout(history);
const NavBar = ({
  currentUser,
  history,
  onUnmountUser,
  onGetUserFromServer,
}) => {
  if (!currentUser.authorId && isLoggedIn()) {
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
)}

export default NavBar;
