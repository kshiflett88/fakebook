import { RECEIVE_ALL_POST, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state); 
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POST:
      return action.posts;
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post})
    case REMOVE_POST:
      
      delete newState[action.post.id]
      return newState;
    default:
      return state;
  }
}

export default postsReducer;