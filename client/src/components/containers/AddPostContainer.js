import { connect } from 'react-redux';
import AddPost from '../AddPost';
import * as actions from '../../redux/actions.js';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onAddPost(post) {
    dispatch(actions.addPost({...post, new: true}));
  },
});

const AddPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPost);

export default AddPostContainer;
