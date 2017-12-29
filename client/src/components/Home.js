import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

const Home = ({
  history,
}) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      <Link to='/todos'>See Todos!</Link>
      <div>
         {
           (isLoggedIn()) ? ( <button onClick={() => logout(history)}>Log out </button> ) : ( <button onClick={() => login()}>Log In</button> )
         }
      </div>
    </p>
  </div>

export default Home;
