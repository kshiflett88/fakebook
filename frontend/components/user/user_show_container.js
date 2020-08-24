import { connect } from 'react-redux'
import UserShow from './user_show'
import { logout, updateUserPhoto, updateUser } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    user: state.entities.users[ownProps.match.params.id]
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateUserPhoto: (userId, photo) => dispatch(updateUserPhoto(userId, photo)),
  updateUser: (userId) => dispatch(updateUser(userId)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)