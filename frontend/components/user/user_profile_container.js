import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { updateUserPhoto, updateUser} from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
  updateUserPhoto: (userId, photo) => dispatch(updateUserPhoto(userId, photo)),
  updateUser: (userId) => dispatch(updateUser(userId)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);