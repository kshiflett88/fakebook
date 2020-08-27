import { connect } from 'react-redux'
import UserShow from './user_show'
import { logout } from '../../actions/session_actions';
import { updateUserPhoto, updateUser, requestUsers, requestUser, createFriendRequest, deleteFriendRequest, addFriendship, deleteFriendship} from '../../actions/user_actions'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id],
    
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateUserPhoto: (userId, photo) => dispatch(updateUserPhoto(userId, photo)),
  updateUser: (userId) => dispatch(updateUser(userId)),
  logout: () => dispatch(logout()),
  requestUsers: () => dispatch(requestUsers()),
  requestUser: (userId) => dispatch(requestUser(userId)),
  createFriendRequest: (requesterId, requesteeId) => dispatch(createFriendRequest(requesterId, requesteeId)),
  deleteFriendRequest: (requesterId, requesteeId) => dispatch(deleteFriendRequest(requesterId, requesteeId)),
  addFriendship: (friendOneId, friendTwoId) => dispatch(addFriendship(friendOneId, friendTwoId)),
  deleteFriendship: (friendOneId, friendTwoId) => dispatch(deleteFriendship(friendOneId, friendTwoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)