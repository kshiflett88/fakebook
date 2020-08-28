import PostForm from './post_form'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createPost } from '../../actions/post_actions'
import { requestUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => ({
  wallType: 'wall',
  postType: 'create',
  currentUser: state.entities.users[state.session.id],
  wall: state.entities.users[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  requestUser: (userId) => dispatch(requestUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))


