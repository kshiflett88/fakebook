import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllPosts, requestPost, createPost, deletePost, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const posts = user.wall_post_ids.map(wallPostId => state.entities.posts[wallPostId]).sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA > dateB ? -1 : 1;
  });
  const authors = posts.some(post => !post) || Object.values(state.entities.users).length < 2 ? null : posts.map(post => state.entities.users[post.author_id]);
  const walls = posts.some(post => !post) || Object.values(state.entities.users).length < 2 ? null : posts.map(post => state.entities.users[post.wall_id]);
  const currentUser = state.entities.users[state.session.id];
  return ({
    
    indexType: 'wall',
    currentUser: state.entities.users[state.session.id],
    wall: state.entities.users[ownProps.match.params.id],
    posts,
    authors,
    walls,
    currentUser

  })
};

const mapDispatchToProps = (dispatch) => ({
  requestAllPosts: (payload) => dispatch(requestAllPosts(payload)),
  requestPost: (postId) => dispatch(requestPost(postId)),
  createPost: (post) => dispatch(createPost(post)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  updatePost: (post) => dispatch(updatePost(post)),
  requestUser: (userId) => dispatch(requestUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));