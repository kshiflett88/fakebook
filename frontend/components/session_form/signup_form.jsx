import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      gender: ""
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
    this.setState({gender: ""})
    this.props.processForm(user).then(() => this.props.history.push('/users'));
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
                <Link className="signup-form-x" to='/users/2'>X</Link>
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

              <br /> 
              <div className="gender-signup">
                <span className="signup-label">Gender:</span>
                <label className="signup-radio"><input type="radio" name="gender" value="Female" onClick={this.handleInput("gender")} />Female</label>
                <label className="signup-radio"><input type="radio" name="gender" value="Male" onClick={this.handleInput("gender")} />Male</label>
                <label className="signup-radio"><input type="radio" name="gender" value="Other" onClick={this.handleInput("gender")} />Other</label><br />
              </div>

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