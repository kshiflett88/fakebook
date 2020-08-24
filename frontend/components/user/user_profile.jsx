import React from 'react'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>{this.props.currentUser.username}</h2>
      </div>
    )
  }

}

export default UserProfile;