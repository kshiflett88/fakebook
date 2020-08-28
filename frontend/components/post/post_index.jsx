import React from 'react';
import PostIndexItem from './post_index_item'
import { requestAllPosts } from '../../actions/post_actions';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPosts({ index_type: this.props.indexType, wall_id: this.props.match.params.id })
  }

  componentDidUpdate(prevProps) {
    if (this.props.indexType !== prevProps.indexType || this.props.match.params.id !== prevProps.match.params.id ) {
      this.props.requestAllPosts({ index_type: this.props.indexType, wall_id: this.props.match.params.id });
    }
  }

  render() {
    const { indexType, requestAllPosts, requestUser, posts, requestPost, updatePost, deletePost, currentUser, authors, walls} = this.props;
    if (!posts || !posts[0] || !authors || !authors[0] || !walls || !walls[0]) return null;
    return(
      <div>
        <ul className="post-index-container">
          {posts.map( (post, idx) => (
            <PostIndexItem 
            post={post}
            indexType={indexType}
            requestAllPosts={requestAllPosts}
            requestUser={requestUser}
            requestPost={requestPost}
            updatePost={updatePost}
            deletePost={deletePost}
            currentUser={currentUser}
            wall={walls[idx]}
            author={authors[idx]}
            authorName={authors[idx].username}
            authorProfilePic={authors[idx].profile_photo}
              isDeletable={(currentUser.id === post.wall_id || currentUser.id === authors[idx].id)}
            key={idx}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default PostIndex