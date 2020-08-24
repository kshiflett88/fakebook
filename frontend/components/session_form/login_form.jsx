import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
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
    // this.setState({ username: "" });
    // this.setState({ password: "" });
    // this.props.processForm(user).then(() => this.props.history.push(`/users/`));
    this.props.processForm(user).then((res) => this.props.history.push(`/users/${res.user.id}`));
  }

  renderErrors() {
    
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          error === "invalid username or password" ?
         (<li className='error' key={i}>
            {error} 
          </li>) : null
        ))}
      </ul>
    )
  }

  handleDemoUser(e) {
    e.preventDefault()
    const demoUser = {username: "Kreator", password: "123456"}
    this.props.processForm(demoUser).then((res) => this.props.history.push(`/users/${res.user.id}`));

  }



  render() {
    return (
      <div className="login-form-container">
          <header className="login-home-page">
            <h1 className="login-form-title">fakebook</h1>
            <p className="login-message">Let's make some unreal connections</p>
          </header>
        <div className="login-form">

          <form className="login-form-body" onSubmit={this.handleSubmit}>
            
              <input
                className="login-form-input"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput("username")} />
            
            <br />
              <input
                className="login-form-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")} />
            <br />
            
            <button className='btn login-form-btn'>Log In</button>
            <button className='btn login-form-btn demo-user' onClick={this.handleDemoUser}>Demo User</button>
            <div id="border"></div>
            <Link className="login-form-signup-btn" to="/signup">Create New Account</Link>

            <div className="render-errors">{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;