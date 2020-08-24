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
    // debugger
    return(
      <div>
        <ul>
          {users.map(user => {
           return  <UsersIndexItem 
            key={user.id}
            user={user}/>
          })}
        </ul>
      </div>
    )
  }
}

export default UserIndex; 