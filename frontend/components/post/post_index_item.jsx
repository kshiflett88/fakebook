import React from 'react';
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this); 
  }


  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id).then(() => this.props.requestUser(this.props.wall.id));
  }


  render() {
    
    const { currentUser, user, post, author} = this.props;
    
    if (!currentUser || !post) return null;
    
    const deleteButton = this.props.isDeletable ? (<button className="delete-post-btn" onClick={this.handleDelete}><i className="fa-times"><FaTimes/></i></button>) : null;
    const wallInformation = this.props.wall.id === this.props.author.id ? (null) : (
      <div className="post-index-item-author-information post-index-item-wall-information">
        
        <div className="post-index-item-author-img-container">
          {/* <img className="post-index-item-author-img"
            src={this.props.wall.profile_picture} alt="" id="img" className="img" /> */}
        </div>
        <div className="post-index-item-author-name">
          {/* <Link to={`/users/${this.props.wall.id}`}><span>{this.props.wall.username}</span></Link> */}
        </div>
      </div>
    );

    return(

      <div className="post-index-item-container">
        <div className="post-index-item-body">
          <div className="post-index-item-author-information">
            <div className="post-index-item-author-img-container">
              <Link to={{ pathname: `/users/${this.props.author.id}` }}><img className="post-index-item-author-img"
                src={author.profile_photo} alt="" className="img" /></Link>

            </div>
            <div className="post-index-item-author-name">
              <Link to={{ pathname: `/users/${author.id}` }}><span>{author.username}</span></Link>
              {deleteButton}
            </div>
            {wallInformation}
          </div>
          <div className="post-index-item-body-text">
            <div>{post.body}</div>
          </div>
        </div>
    
      </div>
    )
  }
}

export default PostIndexItem;