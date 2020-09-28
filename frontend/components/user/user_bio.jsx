import React from 'react';
import { FaGenderless, FaAddressCard, FaHeart } from 'react-icons/fa';

class UserBio extends React.Component {
  constructor(props) {
    super(props)
    this.oldBio = this.props.user.bio;
    this.oldGender = this.props.user.gender
    this.oldRelationshipStatus = this.props.user.relationship_status
    this.state = {
      id: this.props.user.id,
      bio: this.props.user.bio,
      gender: this.props.user.gender,
      relationship_status: this.props.user.relationship_status,
      showForm: false
    }

    // this.startingState = Object.assign({}, this.props.user);
    // this.state = Object.assign({}, this.props.user);

    // this.toggleForm = {};
    // this.toggleView = {};
    // fields.forEach(field => this.toggleView[field] = React.createRef());
    // forms.forEach(form => this.toggleForm[form] = React.createRef());

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.showForm = this.showForm.bind(this);
    // this.hideForm = this.hideForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (this.props.user.bio !== prevProps.user.bio && this.props.user.gender !== prevProps.user.gender && this.props.user.relationship_status !== prevProps.user.relationship_status) {
      this.setState({ bio: this.props.user.bio, gender: this.props.user.gender, relationshipStatus: this.props.user.relationship_status, showForm: false });
      this.oldBio = this.props.user.bio;
      this.oldGender = this.props.user.gender;
      this.oldRelationshipStatus = this.props.user.relationship_status;
    }
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({ id: this.props.user.id, bio: this.props.user.bio, showForm: false });
      this.oldBio = this.props.user.bio;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.toggleForm();
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  resetForm() {
    this.setState({ bio: this.oldBio });
    this.toggleForm();
  }


  handleChange(field) {
    console.log(field)
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }


  render() {
    const bio = this.props.user.bio;
    const birthday = this.props.user.birthday;
    const gender = this.props.user.gender;
    const relationshipStatus = this.props.user.relationship_status;
    const { user, currentUser } = this.props

    return (
      <div className="timeline-intro-content">
        <div className="timeline-header">
            <span className="timeline-header-text">
              Intro
            </span> 
        </div>
        <div className="intro-container">
          {
            this.state.bio && !this.state.showForm ? (
              <div className="intro-body">
                <p className="intro-body-text"><FaAddressCard className="intro-icon" />{this.state.bio}</p>
                <p className="intro-body-text"><FaGenderless className="intro-icon"/>{this.state.gender}</p>
                <p className="intro-body-text"><FaHeart className="intro-icon"/>{this.state.relationship_status}</p>
              </div>
            ) : (user === currentUser && !this.state.showForm ? (
              <div className="no-intro-body">
                  <p className="intro-body-text"><FaAddressCard className="intro-icon"/>Add a short bio to tell other about yourself.</p>
                  <p className="intro-body-text"><FaGenderless className="intro-icon"/>{this.state.gender}</p>
                  <p className="intro-body-text"><FaHeart className="intro-icon"/>{this.state.relationship_status}</p>
              </div>
            ) : ( user !== currentUser ? (
                <div className="no-intro-body">
                    <p className="intro-body-text"><FaAddressCard className="intro-icon"/>{user.bio}</p>
                    <p className="intro-body-text"><FaGenderless className="intro-icon"/>{user.gender}</p>
                    <p className="intro-body-text"><FaHeart className="intro-icon"/>{this.state.relationship_status}</p>
                </div> 
            ) : ("")))
          }
          {
            user === currentUser & !this.state.showForm ? (
              <button className="intro-edit-button" onClick={this.toggleForm.bind(this)}>
                {bio ? "Edit Details" : "Edit Details"}
              </button>
            ) : (
                user === currentUser & this.state.showForm ? (
                  <form className="intro-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="bio-form">
                      <FaAddressCard className="intro-icon" />
                      <textarea value={this.state.bio} placeholder="Describe who you are" onChange={this.handleChange("bio")}></textarea>
                    </div>
                    <div>
                      <FaGenderless className="intro-icon" />
                      <select className="gender-form" value={this.state.gender} onChange={this.handleChange("gender")}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <FaHeart className="intro-icon" />
                      <select className="relationship-form" value={this.state.relationship_status} onChange={this.handleChange("relationship_status")}>
                        <option value="Single">Single</option>
                        <option value="In a relationship">In a relationship</option>
                        <option value="Complicated">Complicated</option>
                        <option value="Married">Married</option>
                        <option value="Engaged">Engaged</option>
                      </select>
                    </div>
                    <div className="intro-buttons">
                      <button className="cancelled" onClick={this.resetForm.bind(this)}>Cancel</button>
                      <input className="save-changes" type="submit" value="Save" />
                    </div>
                  </form>
                ) : (""))
          }
        {/* </div>
        <div className="gender-container">
          {
            this.state.gender && !this.state.showForm ? (
              <div className="gender-body">
                {this.state.gender}
              </div>
            ) : ((""))
          }
          {
            user === currentUser & !this.state.showForm ? (
              <button onClick={this.toggleForm.bind(this)}>
                {gender ? "Edit gender" : "Add Bio"}
              </button>
            ) : (
                user === currentUser & this.state.showForm ? (
                  <form className="gender-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                      <select value={this.state.gender}  onChange={this.handleChange("gender")}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>
                    <div className="gender-buttons">
                      <button className="cancelled" onClick={this.resetForm.bind(this)}>Cancel</button>
                      <input className="save-changes" type="submit" value="Save" />
                    </div>
                  </form>
                ) : (""))
          }
        </div>
        <div className="relationship-container">
          {
            this.state.relationshipStatus && !this.state.showForm ? (
              <div className="relationship-body">
                {this.state.relationshipStatus}
              </div>
            ) : ( (""))
          }
          {
            user === currentUser & !this.state.showForm ? (
              <button onClick={this.toggleForm.bind(this)}>
                {relationshipStatus ? "Edit relationship status" : "Add Relations"}
              </button>
            ) : (
                user === currentUser & this.state.showForm ? (
                  <form className="relationship-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                      <select value={this.state.relationshipStatus} onChange={this.handleChange("relationshipStatus")}>
                        <option value="Single">Single</option>
                        <option value="In a relationship">In a relationship</option>
                        <option value="Complicated">Complicated</option>
                        <option value="Married">Married</option>
                        <option value="Engaged">Engaged</option>
                      </select>
                    </div>
                    <div className="relationship-buttons">
                      <button className="cancelled" onClick={this.resetForm.bind(this)}>Cancel</button>
                      <input className="save-changes" type="submit" value="Save" />
                    </div>
                  </form>
                ) : (""))
          } */}
        </div>
        {/* <li>Birthday: {birthday}</li>
            <li>Relationship Status: {relationship_status}</li>
          </ul> */}
      </div>
    )
  }
}

export default UserBio;
