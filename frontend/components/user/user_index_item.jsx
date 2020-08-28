import React from 'react'
import { Link } from 'react-router-dom';

const UsersIndexItem = props => (  
  <div className="index-profile-container">
  
  <li>   
    <div className="index-profile">
      <img className="user-index-photo" src={props.user.profile_photo} />
     <div className="right-side-index-profile">

        <div className="index-user-link">
          <Link to={`/users/${props.user.id}`} className='user-profile-link'>{props.user.username}
          </Link>  
            <p id="syp">See my profile</p>
        </div>
          <br />
        <div className="index-friend-list-container">
              <p id="friends-title">friends {props.user.friends.length} </p>
            <ul className="index-friend-list">
                {props.user.friends.map(friend => {
                  return <li key={friend.id}>
                    <img className="index-friend-pic" src={friend.profile_photo} />
                    {friend.username}</li>
                })}
            </ul>
        </div>

      </div>
    </div>   
  </li>
</div>

) 

export default UsersIndexItem