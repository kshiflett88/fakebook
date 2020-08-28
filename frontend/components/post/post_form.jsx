import React from 'react';
import { Modal } from 'react-responsive-modal'; 
import { FaTimes, FaPhotoVideo, FaFlag, FaVideo } from 'react-icons/fa'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    const wallId = this.props.wall ? this.props.wall.id : null; 
    this.state = { body: '', wallId: wallId, isModalOpen: false };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    if (this.props.match.params.id) this.props.requestUser(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.wall !== prevProps.wall) {
      this.setState({ wallId: this.props.wall.id });
    }
  }

  onOpenModal() {
    this.setState({ isModalOpen: true });
  };

  onCloseModal() {
    this.setState({ isModalOpen: false });
  };

  handleUpdate(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost({ body: this.state.body, wall_id: this.state.wallId }).then(() => {
      this.setState({ isModalOpen: false });
      this.props.requestUser(this.props.wall.id);
    });
  }


  render() {
    const { wallType, postType, currentUser, wall } = this.props;
    if (!currentUser || !wall) return null; 
    
    // if (wallType == 'wall' && currentUser.id !== wall.id && !currentUser.friends.id.includes(wall.id)) return null;
    const placeholderText = currentUser.id === this.props.wall.id ? `Whatcha thinkin bout, ${currentUser.username}?` : `${wall.username} wont bite, say somthing`
    
    const isModalOpen = this.state.isModalOpen;
    const modal = isModalOpen ? (
      <Modal open={isModalOpen} onClose={this.onCloseModal} classNames={{
        overlay: 'react-responsive-modal-overlay',
        modal: 'react-responsive-modal-modal post-form-modal',
        modalCenter: 'react-responsive-modal-modalCenter',
        closeButton: 'react-responsive-modal-closeButton post-form-modal-btn',
      }}>
        <form className="post-form" onSubmit={this.handleSubmit}>
          
          <div className="post-form-body">
            <div className="post-form-img-container">
              <img className="post-form-img"
                src={currentUser.profile_photo} alt="" id="img" className="img" />
              <input className="post-form-text" placeholder={placeholderText} onChange={this.handleUpdate} />
            </div>
          </div>
         
          <div className="border-bottom"></div>

          <span className="post-icons">
            <i className="fa-pencil-alt"><FaVideo id="video" />Live Video</i>
            <i className="fa-camera"><FaPhotoVideo id="photo" />Photo/Video</i>
            <i className="fa-video"><FaFlag id="flag" />Life Event</i>
          </span>
         
          <button className="post-form-submit-btn">Post</button>
        </form>
      </Modal>
    ) : null; 
    
    return (
      <div className="wall-post-form-container">
        <div className="post-form-holder">
          <div className="post-form-img-container">
            <img className="post-form-img"
              src={currentUser.profile_photo} alt="" id="img" className="img" />
            <input className="post-form-text" placeholder={placeholderText} onClick={this.onOpenModal} />
          </div>
        </div>

        <div className="border-bottom"></div>
        
        <span className="post-icons">
          <i className="fa-pencil-alt"><FaVideo id="video"/>Live Video</i> 
          <i className="fa-camera"><FaPhotoVideo id="photo"/>Photo/Video</i> 
          <i className="fa-video"><FaFlag id="flag"/>Life Event</i> 
        </span>
       
        {modal}
     
      </div>
    )
  }
}

export default PostForm;