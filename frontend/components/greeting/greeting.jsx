import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='greeting'>
        {this.props.currentUser ?
          <div>
            <h3>Welcome {this.props.currentUser.username}</h3>
            <button onClick={this.props.logout}>Log Out</button>
          </div>
          :
          <div className="greeting-btn">
            <Link className="btn" to="/signup">Sign Up</Link>
        
            <Link className="btn" to="/login">Log In</Link>
          </div>}
      </div>
    )
  }
}
export default Greeting