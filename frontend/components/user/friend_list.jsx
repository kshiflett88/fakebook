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
          <div className="friend-list-header">
            <p className="friend-list-title">Friends</p>
            <p className="friend-count">{user.friends.length} friends</p>
          </div>
          <div className="friend-pics-container">
            <div className="friend-list-pics">
              <div className="friend-pics">
                  {user.friends.map(friend => {
                    return <Link className="friend" key={friend.id} to={`/users/${friend.id}`} ><img className="friend-list-photo" src={friend.profile_photo}/>{friend.username}</Link> 
                  })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default FriendList;