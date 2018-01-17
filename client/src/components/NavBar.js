import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

const NavBar = ({
  user,
  history,
}) =>

  <div className="navbar">
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/posts'>Posts</Link></li>
      <li style={{float:"right"}}>
        {(isLoggedIn()) ?
          (<button onClick={() => logout(history)}>Log out </button>)
          :
          (<button onClick={() => login()}>Log In</button>)}
      </li>
      <li style={{float:"right"}}><Link to='/'>Home</Link></li>
    </ul>
  </div>

  /*
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-intro">
      <Link to='/posts'>Posts</Link>
      <div>
        {
          (isLoggedIn()) ?
            ( <button onClick={() => logout(history)}>Log out </button> )
            :
            ( <button onClick={() => login()}>Log In</button> )
        }
      </div>
    </div>
  </div>
  */

export default NavBar;
