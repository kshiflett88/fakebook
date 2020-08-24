import * as SessionAPIUtil from '../util/session_api_util'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER ='LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
// export const 

//reg actions
const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

// 


//Thunks 
export const requestUsers = () => (dispatch) => {
  return SessionAPIUtil.fetchUsers()
  .then((users) => {
    return dispatch(receiveAllUsers(users))
  })
}

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.postSession(user)
  .then((user) => {
    return dispatch(receiveCurrentUser(user))
  }).fail((errors) => {
    return dispatch(receiveSessionErrors(errors.responseJSON))
  })
}

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.postUser(user).then((user) => {
    return dispatch(receiveCurrentUser(user))
  }).fail((errors) => {
    return dispatch(receiveSessionErrors(errors.responseJSON))
  })
}

export const logout = () => (dispatch) => {
  return SessionAPIUtil.deleteSession().then((user) => {
   return dispatch(logoutCurrentUser())
  }).fail((errors) => {
    return dispatch(receiveSessionErrors(errors))
  })
}

export const updateUser = (user) => (dispatch) => {
  return SessionAPIUtil.updateUser(user).then((user) => {
    return dispatch(receiveCurrentUser(user))
  })
}

export const updateUserPhoto = (userId, photo) => (dispatch) => {
  return SessionAPIUtil.updateUserPhoto(userId, photo).then((user) => {
    return dispatch(receiveCurrentUser(user))
  })
}