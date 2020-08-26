import * as FriendRequestAPIUtil from '../util/friend_request_api_util';
import * as FriendshipAPIUtil from '../util/friendship_api_util';
import * as UserAPIUtil from '../util/user_api_util' 

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}




export const requestUsers = () => (dispatch) => {
  return UserAPIUtil.fetchUsers()
    .then((users) => {
      return dispatch(receiveAllUsers(users))
    })
}

export const requestUser = (userId) => (dispatch) => {
  return UserAPIUtil.fetchUser(userId)
    .then((user) => {
      return dispatch(receiveUser(user))
    })
}

export const updateUser = (user) => (dispatch) => {
  return UserAPIUtil.updateUser(user).then((user) => {
    return dispatch(receiveUser(user))
  })
}

export const updateUserPhoto = (userId, photo) => (dispatch) => {
  return UserAPIUtil.updateUserPhoto(userId, photo).then((user) => {
    return dispatch(receiveUser(user))
  })
}

export const createFriendRequest = (requesterId, requesteeId) => (dispatch) => {
  return FriendRequestAPIUtil.createFriendRequest(requesterId, requesteeId)
    .then((user) => {
      return dispatch(receiveUser(user))
    })
}

export const deleteFriendRequest = (requesterId, requesteeId) => (dispatch) => {
  return FriendRequestAPIUtil.deleteFriendRequest(requesterId, requesteeId)
    .then((user) => {
      return dispatch(receiveUser(user))
    })
}

export const addFriendship = (friendOneId, friendTwoId) => (dispatch) => {
  return FriendshipAPIUtil.addFriendship(friendOneId, friendTwoId) 
    .then((user) => {
      return dispatch(receiveUser(user))
    })
}

export const deleteFriendship = (friendOneId, friendTwoId) => (dispatch) => {
  return FriendshipAPIUtil.deleteFriendship(friendOneId, friendTwoId) 
    .then((user) => {
      return dispatch(receiveUser(user))
    })
}