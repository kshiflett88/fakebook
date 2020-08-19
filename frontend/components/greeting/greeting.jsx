import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='greeting-container'>
        {this.props.currentUser ?
          <div className="greeting-header">
            <h3 className="greeting-username">Welcome {this.props.currentUser.username}</h3>
            <button className="greeting-logout-btn" onClick={this.props.logout}>Log Out</button>
          </div>
          :
          <div className="greeting-btn">
          </div>}
      </div>
    )
  }
}
export default Greeting