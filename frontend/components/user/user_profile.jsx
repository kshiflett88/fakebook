import React from 'react'
import UserShowContainer from './user_show_container';
import { Route, Link, Redirect } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util'
// import FriendRequestButton from './friend_request_button';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* <Route exact path="/users/:id" component={UserShowContainer} /> */}
        {/* Kodi - todo */}
        <UserShowContainer /> 
        
      </div>
    )
  }

}

export default UserProfile;