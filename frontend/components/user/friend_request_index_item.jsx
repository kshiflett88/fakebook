import React from 'react'

class FriendRequestIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
  }

  handleAddFriend(e) {
    e.preventDefault();
    this.props.addFriendship(this.props.currentUser.id, this.props.requester.id)
  }

  handleDeleteRequest(e) {
    e.preventDefault();

    this.props.deleteFriendRequest(this.props.requester.id, this.props.currentUser.id)
  }


  render() {
    const { user, currentUser, requester } = this.props;
    
    return(
      <div>
        { currentUser.id === user.id ? 
        
        <div className="request-list">
          <li className="requester-name">{requester.username}
            <button className="add-friend" onClick={this.handleAddFriend}>Add</button>
            <button className="deny-friend" onClick={this.handleDeleteRequest}>Deny</button>
          </li>
        </div>
      :null
    } 
      </div>
    )
  }
}

export default FriendRequestIndexItem;