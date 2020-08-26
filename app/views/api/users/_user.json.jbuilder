json.extract! user, :username, :id, :email, :friend_ids, :requestee_ids, :requester_ids
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : ""
json.profile_photo user.profile_photo.attached? ? url_for(user.profile_photo) : ""
json.friends user.friends.each do |friend|
  json.set! friend.id do 
   json.extract! friend, :username, :id
  end
end