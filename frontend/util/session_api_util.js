import { $CombinedState } from "redux"


export const postUser = (user) => {
  return $.ajax({
    url: "/api/users",
    method: "POST", 
    data: { user }
  })
}

export const postSession = (user) => { 
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  })
}

export const deleteSession = () => {
  return $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
}

// export const fetchUsers = ()  => {
//   return $.ajax({
//     url: "/api/users",
//     method: "GET"
//   })
// }

// export const updateUser = (user) => {
//   return $.ajax({
//     url: `/api/users/${user.id}`,
//     method: 'PATCH',
//     data: { user }
//   })
// }

// export const fetchUser = (userId) => {
//   return $.ajax({
//     url: `/api/users/${userId}`,
//     method: 'GET'
//   })
// }

// export const updateUserPhoto = (userId, photo) => {
//   return $.ajax({
//     url: `/api/users/${userId}`,
//     method: 'PATCH',
//     data: photo,
//     contentType: false, 
//     processData: false
//   })
// }

