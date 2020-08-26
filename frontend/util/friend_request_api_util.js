import { $CombinedState } from "redux"

export const createFriendRequest = (requesterId, requesteeId) => {
  return $.ajax({
    url: `/api/friend_requests/${requesterId}/${requesteeId}`,
    method: 'POST',
  })
}

export const deleteFriendRequest = (requesterId, requesteeId) => {
  return $.ajax({
    url: `/api/friend_requests/${requesterId}/${requesteeId}`,
    method: 'DELETE'
  })
}

