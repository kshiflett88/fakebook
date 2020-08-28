import React from 'react'
import { requestUser } from '../../actions/user_actions';

class FriendRequestIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
  }

  handleAddFriend(e) {
    e.preventDefault();
    this.props.addFriendship(this.props.currentUser.id, this.props.requester.id)
    .then(() => this.props.requestUser(this.props.user.id))
  }

  handleDeleteRequest(e) {
    e.preventDefault();
    this.props.deleteFriendRequest(this.props.requester.id, this.props.currentUser.id)
    .then(() => this.props.requestUser(this.props.user.id))
  }


  render() {
    const { user, currentUser, requester } = this.props;
    
    return(
      <div>
        { currentUser.id === user.id ? 
        
        <div className="request-list">
          <img className="requester-image" src={requester.profile_photo} />
          <li className="requester-name">{requester.username}
          {/* <div className="accept-btns"> */}
            <button className="add-friend" onClick={this.handleAddFriend}>Add</button>
            <button className="deny-friend" onClick={this.handleDeleteRequest}>Deny</button>
          {/* </div> */}
          </li>
        </div>
      :null
    } 
      </div>
    )
  }
}

export default FriendRequestIndexItem;