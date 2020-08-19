import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
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
      <div className="signup-container">
        <div className="signup-form">
            <form className="signup-form-body" onSubmit={this.handleSubmit}>
              <header className='signup-form-header' >
                <div>
                  <h2 className='signup-form-header-title'>Sign Up</h2>
                  <p className="signup-form-header-p">It's quick and easy!</p>
                </div>
                <Link className="signup-form-x" to='/'>X</Link>
              </header>
              <div className="signup-header-border-bottom"></div>
              
                <input
                  className="signup-form-input"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInput("username")} />
              
              <br />
              
                <input
                  className="signup-form-input"
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInput("email")} />
              
              <br />

                <input
                  className="signup-form-input"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInput("password")} />
            
              <button className='signup-form-btn'>create user</button>
            <div className="render-errors">{this.renderErrors()}</div>
            </form>


            <div className="modal-screen"></div>
            
        </div>
      </div>
    )
  }
}

export default SignupForm;