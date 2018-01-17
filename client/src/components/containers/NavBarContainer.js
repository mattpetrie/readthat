import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onGetUserFromServer(user) {
    dispatch(actions.getUserFromServer(user));
  },
  onUnmountUser() {
    dispatch(actions.unmountUser());
  },
});

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NavBar));

export default NavBarContainer;
