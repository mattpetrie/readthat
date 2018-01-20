import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state) => ({
  profile: state.currentUser.profile,
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
