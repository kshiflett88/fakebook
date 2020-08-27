import React from 'react';
import { FaPlus, FaPencilAlt, FaCheck, FaEraser } from 'react-icons/fa';
import user_show_container from './user_show_container';

class FriendRequest extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleAddRequest = this.handleAddRequest.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    this.handleDeleteFriendship = this.handleDeleteFriendship.bind(this);
  }


handleAddRequest(e) {
  e.preventDefault();
  this.props.createFriendRequest(this.props.currentUser.id, this.props.user.id)
  
}

handleDeleteRequest(e) {
  e.preventDefault();
  this.props.deleteFriendRequest(this.props.currentUser.id, this.props.user.id)
}

handleDeleteFriendship(e) {
  e.preventDefault();
  this.props.deleteFriendship(this.props.currentUser.id, this.props.user.id)
}


  render() {
    const { createFriendRequest, deleteFriendRequest, addFriendship, deleteFriendship, user, currentUser} = this.props;
    // On another users page and you are not their friend
    let buttonText = (<><FaPlus /> Add Friend</>)
    let buttonClick = this.handleAddRequest

    
    user.requesters.forEach(requester => {
      
      // On friends request has been sent
      if (Object.values(requester).includes(currentUser.id)) {
        buttonText = (<><FaEraser /> Delete Request</>)
        buttonClick = this.handleDeleteRequest
      }
    })
    
    // On the current users page
    if (user.id === currentUser.id) {
    buttonText = (<><FaPencilAlt/> Edit Profile</>)
    buttonClick = null
  }

    //If current user is users friend
    user.friends.forEach(friend => {
      if (Object.values(friend).includes(currentUser.id)) {
        buttonText = (<><FaCheck />Friends</>)
        buttonClick = this.handleDeleteFriendship
      }
    })

    return(
      <div>
        <button id="edit-profile" onClick={buttonClick}>{buttonText}</button>
      </div>
    )
  }
}

export default FriendRequest; 