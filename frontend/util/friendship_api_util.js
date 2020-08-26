import { $CombinedState } from "redux"

export const addFriendship = (friendOneId, friendTwoId) => {
  return $.ajax({
    url: `/api/friendships/${friendOneId}/${friendTwoId}`,
    method: 'POST',
   
  })
}

export const deleteFriendship = (friendOneId, friendTwoId) => {
  return $.ajax({
    url: `/api/friendships/${friendOneId}/${friendTwoId}`,
    method: 'DELETE',
  })
}
