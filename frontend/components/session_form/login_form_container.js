import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)