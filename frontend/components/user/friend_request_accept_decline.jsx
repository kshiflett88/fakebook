import React from 'react'
import FriendRequestIndexItem from './friend_request_index_item'

class FriendRequestAcceptDelete extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { user, currentUser } = this.props;
   
    return (
      <div>
        <ul>
          {user.requesters.map(requester => {
            return <FriendRequestIndexItem 
            key={requester.id} 
            user={user}
            requester={requester}
            currentUser={currentUser}
            deleteFriendRequest={this.props.deleteFriendRequest}
            addFriendship={this.props.addFriendship}
            />
          })}
        </ul>
      </div>
    )
  }
}

export default FriendRequestAcceptDelete;