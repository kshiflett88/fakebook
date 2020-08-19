import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearSessionErrors} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)