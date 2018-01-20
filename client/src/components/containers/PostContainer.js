import { connect } from 'react-redux';
import Post from '../Post';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post,
});

const mapDispatchToProps = (dispatch) => ({
});

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);

export default PostContainer;
