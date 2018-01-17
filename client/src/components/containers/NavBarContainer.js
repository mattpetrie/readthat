import { connect } from 'react-redux';
import NavBar from '../NavBar';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onGetUserFromServer(user) {
    dispatch(actions.getUserFromServer(user));
  },
});

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);

export default NavBarContainer;
