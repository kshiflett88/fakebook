import { connect } from 'react-redux';
import { requestUsers } from '../../actions/user_actions';
import UserIndex from './user_index'

const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch) => ({
  requestUsers: () => dispatch(requestUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)