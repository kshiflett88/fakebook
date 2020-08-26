import React from 'react'
import GreetingContainer from '../navbar/navbar'
import { FaCamera, FaPencilAlt, FaEye, FaSearch } from 'react-icons/fa';
import UserProfile from './user_profile';
import FriendRequest from './friend_request';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coverPhotoFile: null,
      profilePhotoFile: null
    }

    this.photoProfileUpload = React.createRef();
    this.photoCoverUpload = React.createRef();
    this.handleCoverFile = this.handleCoverFile.bind(this);
    this.coverHandleSubmit = this.coverHandleSubmit.bind(this);
    this.coverPhotoUpload = this.coverPhotoUpload.bind(this);
    this.profilePhotoUpload = this.profilePhotoUpload.bind(this);
    this.profileHandleSubmit = this.profileHandleSubmit.bind(this);
    this.handleProfileFile = this.handleProfileFile.bind(this);
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.id);
  }

handleCoverFile(e) {
  const reader = new FileReader();
  const file = e.currentTarget.files[0];
  reader.onloadend = () => this.setState({ coverPhotoFile: file }, () => this.coverHandleSubmit()) 
  if (file) {
    reader.readAsDataURL(file)
  } else {
    this.setState({coverPhotoFile: null})
  }
}

coverHandleSubmit(e) {
  const formData = new FormData();
  
  formData.append('user[cover_photo]', this.state.coverPhotoFile);

  this.props.updateUserPhoto(this.props.user.id, formData);
  
}

handleProfileFile(e) {
  const reader = new FileReader();
  const file = e.currentTarget.files[0];
  reader.onloadend = () => this.setState({ profilePhotoFile: file }, () => this.profileHandleSubmit())
  if (file) {
    reader.readAsDataURL(file)
  } else {
    this.setState({ profilePhotoFile: null })
  }
}

profileHandleSubmit(e) {
  const formData = new FormData();

  formData.append('user[profile_photo]', this.state.profilePhotoFile);
 
  this.props.updateUserPhoto(this.props.user.id, formData);

}


coverPhotoUpload() {
  this.photoCoverUpload.current.click();
}

profilePhotoUpload() {
  this.photoProfileUpload.current.click();
}
  


  render() {
    if (!this.props.user) return null
    const {user} = this.props;
    return(
      <div className="container-all">
        <div className='cover-photo-container'>
          <div className='cover-photo-btn'>
            <input id="cover-image" type="file" ref={this.photoCoverUpload}
            onChange={this.handleCoverFile}></input>
            <button className="add-cover-photo" onClick={this.coverPhotoUpload}> <FaCamera/> {user.cover_photo ? "Edit " : "Add "}Cover Photo </button>

            <img className="cover-photo" src={user.cover_photo} />
        
            <input id="profile-image" type="file" ref={this.photoProfileUpload}
              onChange={this.handleProfileFile}></input>
            <button className="add-profile-photo" onClick={this.profilePhotoUpload}> <FaCamera /> </button>

            <img className="profile-photo" src={user.profile_photo} />
        
          </div>
        
          <h2 className="profile-username">{user.username}</h2>

          <div className="profile-border"></div>

          <div className="profile-bar">
            <p className="basic">Timeline</p>
            <p className="basic">About</p>
            <p className="basic">Friends</p>
            <p className="basic">Photos</p>
            <p className="basic">Archive</p>
            <p className="basic">More</p>
            <FriendRequest id="edit-profile" 
              createFriendRequest={this.props.createFriendRequest}
              deleteFriendRequest={this.props.deleteFriendRequest}
              addFriendship={this.props.addFriendship}
              deleteFriendship={this.props.deleteFriendship}
              user={user}
              currentUser={this.props.currentUser} />
            <p id="eye"><FaEye/></p>
            <p id="search"><FaSearch /></p>
            <p id="dots">...</p>
          </div>
         
        </div>
      </div>
    )
  }
}

export default UserShow;