import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger, FaBell, FaCaretDown, FaPlus, FaSearch, FaHome, FaTv, FaStore, FaUsers, FaGamepad} from 'react-icons/fa';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

 

  render() {
    return (
      <div className='greeting-container'>

        {this.props.currentUser ?
          <div className="navbar"> 
            <div className="navbar-left">
              <input className="search-bar" type="text" placeholder="Search Fakebook"></input>
            </div>

            <div className="navbar-mid">
              <div className="dropdown">
                <i className="fa-home"><FaHome /></i>
                <div className="home">
                  <p className="drop-home">Home</p>
                </div>
              </div>
            
              <div className="dropdown">
                <i className="fa-tv"><FaTv /></i>
                <div className="tv">
                  <p className="drop-home">Watch</p>
                </div>
              </div>
              
              <div className="dropdown">
                <i className="fa-store"><FaStore /></i>
                <div className="store">
                  <p className="drop-home">Marketplace</p>
                </div>
              </div>

              <div className="dropdown">
                <i className="fa-users"><FaUsers /></i>
                <div className="groups">
                  <p className="drop-home">Groups</p>
                </div>
              </div>
              
              <div className="dropdown">
                <i className="fa-gamepad"><FaGamepad /></i>
                <div className="gaming">
                  <p className="drop-home">Gaming</p>
                </div>
              </div>
             
            </div>

            <div className="greeting-header">
              <i className="fa-plus"><FaPlus /></i>
              <i className="fa-message"><FaFacebookMessenger/></i>
              <i className="fa-bell"><FaBell/></i>
              
              <div className="dropdown">
                <i className="dropbtn"><FaCaretDown/></i>
                <div className="dropdown-content">
                  <button className="greeting-logout-btn" onClick={this.props.logout}>Log Out</button>
                </div>
              </div>

            </div>
          </div>
          :
          null}
      </div>
    )
  }
}

export default NavBar