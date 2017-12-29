import React, { Component } from 'react';
import { isLoggedIn } from '../utils/AuthService';

const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const Authorized = (WrappedComponent) => {
  class WithAuthorized extends Component {

    componentWillMount() {
      if (!isLoggedIn()) {
        this.props.history.push('/');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  WithAuthorized.displayName = `Authorized(${getDisplayName(WrappedComponent)})`

  return WithAuthorized;
}

export default Authorized;
