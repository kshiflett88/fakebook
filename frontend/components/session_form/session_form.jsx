import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.setState({username: ""});
    this.setState({ password: "" });
    this.setState({ email: "" });
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          return (<li className='error' key={i}>
            {error}
          </li>)
        })}
      </ul>
    )
  }

  

  render() {
    return (
      <div>
        <header><h2 className='form-header'>{this.props.formType === 'login' ? <p>Log In</p> : <p>New User</p>}</h2></header>
        <form className="form-body" onSubmit={this.handleSubmit}>
          <label className='form-label'>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")} />
          </label>
          <br />
          {this.props.formType === 'signup' ?
            (<div>
              <label className='form-label'>Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput("email")} />
              </label>
              <br />
            </div>) : null}
          <label className='form-label'>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")} />
          </label>
          <button className='form-btn'>{this.props.formType === 'signup' ? 
          "create user" : "log in"
          }</button>
        </form>
        {/* {this.props.formType === 'login' ?
          (<Link className="btn" to="/signup">Sign Up</Link>)
          :
          (<Link className="btn" to="/login">Log In</Link>)
        } */}
        {this.renderErrors()}
      </div>
    )
  }
}

export default SessionForm;