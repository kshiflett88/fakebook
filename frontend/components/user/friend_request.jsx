import React from 'react';
import { FaPlus, FaPencilAlt, FaCheck, FaEraser } from 'react-icons/fa';

class FriendRequest extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleAddRequest = this.handleAddRequest.bind(this)
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this)
  }


handleAddRequest(e) {
  e.preventDefault();
  this.props.createFriendRequest(this.props.currentUser.id, this.props.user.id)
  
}

handleDeleteRequest(e) {
  e.preventDefault();

  this.props.deleteFriendRequest(this.props.currentUser.id, this.props.user.id)
}


  render() {
    const { createFriendRequest, deleteFriendRequest, addFriendship, deleteFriendship, user, currentUser} = this.props;
    let buttonText = (<><FaPlus/> Add Friend</>)
    let buttonClick = () => createFriendRequest(currentUser.id, user.id)

    // On the current users page
    if (user.id === currentUser.id) {
    buttonText = (<><FaPencilAlt/> Edit Profile</>)
    buttonClick = null
    }

    // On another users page and you are not their friend
    else if (!user.requester_ids.includes(currentUser.id)) {
      buttonText = (<><FaPlus /> Add Friend</>)
      buttonClick = this.handleAddRequest
    }
    // On friends request has been sent
    else if (user.requester_ids.includes(currentUser.id)) {
      buttonText = (<><FaEraser /> Delete Request</>)
      buttonClick = this.handleDeleteRequest
    }

    // On another users page and you are their friend
    else if (user.friend_ids.includes(currentUser.id)) {
      buttonText = (<><FaCheck /> Friends</>)
      buttonClick = null
    }

    
    return(
      <div>
        <button id="edit-profile" onClick={buttonClick}>{buttonText}</button>
      </div>
    )
  }
}

export default FriendRequest; 