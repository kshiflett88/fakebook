import React from 'react'
import GreetingContainer from '../navbar/navbar'
import { FaCamera } from 'react-icons/fa';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coverPhotoFile: null,
      profilePhotoFile: null
    }

    this.photoCoverUpload = React.createRef();
    this.handleCoverFile = this.handleCoverFile.bind(this);
    this.coverHandleSubmit = this.coverHandleSubmit.bind(this);
    this.showPhotoUpload = this.showPhotoUpload.bind(this);
    this.profileHandleSubmit = this.profileHandleSubmit.bind(this);
    this.handleProfileFile = this.handleProfileFile.bind(this);
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
  debugger
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



  showPhotoUpload() {
    this.photoCoverUpload.current.click();
  }
  


  render() {
    // console.log(this.state)
    const {user} = this.props;
    return(
      <div className='cover-photo-container'>
        <div className='cover-photo-btn'>
          <input id="cover-image" type="file" ref={this.photoCoverUpload}
          onChange={this.handleCoverFile}></input>
          <button className="add-cover-photo" onClick={this.showPhotoUpload}> <FaCamera/> {user.cover_photo ? "Edit " : "Add "}Cover Photo </button>

          {<img className="cover-photo" src={user.cover_photo} />}
       
          <input id="profile-image" type="file" ref={this.photoUpload}
            onChange={this.handleProfileFile}></input>
          <button className="add-profile-photo" onClick={this.showPhotoUpload}> <FaCamera /> </button>

          {<img className="profile-photo" src={user.profile_photo} />}
       
        </div>
      
        <h2 className="profile-username">{user.username}</h2>

      </div>
    )
  }
}

export default UserShow;