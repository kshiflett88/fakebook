import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POST = 'RECEIVE_ALL_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POST,
  posts
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const removePost = post => ({
  type: REMOVE_POST,
  post 
})

// thunks 

export const requestAllPosts = (payload) => (dispatch) => {
  return PostAPIUtil.fetchPosts(payload) 
    .then((posts) => {
      return dispatch(receiveAllPosts(posts))
    })
}

export const requestPost = (postId) => (dispatch) => {
  return PostAPIUtil.fetchPost(postId) 
    .then((post) => {
      return dispatch(receivePost(post))
    })
}

export const createPost = (post) => (dispatch) => {
  return PostAPIUtil.createPost(post) 
    .then((post) => {
      return dispatch(receivePost(post))
    })
}

export const deletePost = (postId) => (dispatch) => {
  return PostAPIUtil.deletePost(postId) 
    .then((post) => {
      return dispatch(removePost(post))
    })
}

export const updatePost = (post) => (dispatch) => {
  return PostAPIUtil.updatePost(post) 
    .then((post) => {
      return dispatch(receivePost(post))
    })
}