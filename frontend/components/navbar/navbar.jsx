import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger, FaGithub, FaLinkedin, FaBell, FaCaretDown, FaPlus, FaHome, FaTv, FaStore, FaUsers, FaGamepad} from 'react-icons/fa';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

 


  render() {
    // console.log(this.props.currentUser)

    const {currentUser} = this.props;
    const caratDrop = React.createRef();
    

    const unhideDropdown = (ref) => {
      return () => {
        ref.current.classList.toggle("show-dropdown");
        // icon.current.classList.toggle("selected");
      };
    }

    return (
      <div className='greeting-container'>

        {currentUser ?
          <div className="navbar"> 
            <div className="navbar-left">
              <input className="search-bar" type="text" placeholder="Search Fakebook"></input>
            </div>

            <div className="navbar-mid">

                <div className="dropdown">
                  <Link to={'/users'} >
                      <i className="fa-home"><FaHome /></i>
                      <div className="home">
                        <p className="drop-home">Home</p>
                      </div>
                  </Link>
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
                <a href="https://www.linkedin.com/in/kodi-shiflett-5a1a0644/">
                  <i className="fa-users"><FaLinkedin /></i>
                  <div className="groups">
                    <p className="drop-home">Linkedin</p>
                  </div>
                </a>
              </div>
              
              <div className="dropdown">
                <a href="https://github.com/kshiflett88" >
                  <i className="fa-gamepad"><FaGithub /></i>
                  <div className="gaming">
                    <p className="drop-home">Github</p>
                  </div>
                </a>
              </div>
             
            </div>

            <div className="greeting-header">
              
              <div className="navbar-profile-link">
                <Link to={`/users/${currentUser.id}`}>
                  <div className="navbar-prp-link">
                    <img className="nav-bar-pfp" src={currentUser.profile_photo} />
                    <p className="navbar-username">{currentUser.username}</p>
                  </div>
                </Link>
              </div>
              <i className="fa-plus"><FaPlus /></i>
              <i className="fa-message"><FaFacebookMessenger/></i>
              <i className="fa-bell"><FaBell/></i>
              

              <div className="dropdown">
                <button className="dropbtn" onClick={unhideDropdown(caratDrop)}><FaCaretDown />
                  </button>
                <div ref={caratDrop} id="myDropdown" className="dropdown-content">
                  <Link to={`/users/${currentUser.id}`}>
                    <div className="dropdown-profile-link"> 
                      <img className="dropdown-profile-photo" src={currentUser.profile_photo} />
                      <div className="user-profile-dp">
                        <p id="user-name">{currentUser.username}</p>
                        <p id="syp">See your profile</p>
                      </div>
                    </div>
                  </Link>  
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