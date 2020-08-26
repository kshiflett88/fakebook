json.extract! user, :username, :id, :email 
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : ""
json.profile_photo user.profile_photo.attached? ? url_for(user.profile_photo) : ""
json.extract! user, :requester_ids, :requestee_ids, :friend_ids