import React from 'react';
import { Link } from 'react-router-dom';
import UsersIndexItem from './user_index_item';


class UserIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestUsers()
  }

  render() {
    const { users } = this.props;
    
    return(
      <div className="index-container">
        <div className="index-holder">
            <h1 className="index-title">Start Connecting</h1>
            <ul>
              {users.map(user => {
                return  <UsersIndexItem 
                key={user.id}
                user={user}/>
              })}
            </ul>
          </div>
      </div>
    )
  }
}

export default UserIndex; 