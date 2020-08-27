import React from 'react'
import { Link } from 'react-router-dom';

class FriendList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user, users } = this.props;
    
    return(
      <div>
        <div className="friend-list">
          <p className="friend-list-title">Friends</p>
          <ul>
          {user.friends.map(friend => {
            return <Link className="friend" key={friend.id} to={`/users/${friend.id}`} >{friend.username}</Link> 
          })}
          </ul>
        </div>
      </div>
    )
  }
}

export default FriendList;