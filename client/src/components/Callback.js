import { Component } from 'react';
import { setIdToken, setAccessToken, getProfile } from '../utils/AuthService';
import { addUserToServer } from '../api/users';


class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();

    // TODO: Implmenet check if user already exists and only submit if they don't
    const user = getProfile();
    addUserToServer(user);

    window.location.href = "/";
  }

  render() {
    return null;
  }
}

export default Callback;
