json.extract! user, :username, :id, :email, :authored_post_ids, :wall_post_ids, :birthday, :gender, :bio, :relationship_status
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : ""
json.profile_photo user.profile_photo.attached? ? url_for(user.profile_photo) : ""

json.requesters do 
  json.array! user.requesters do |requester|
        json.id requester.id 
        json.username requester.username
        json.profile_photo requester.profile_photo.attached? ? url_for(requester.profile_photo) : ""
  end
end

json.friends do 
  json.array! user.friends do |friend|
        json.id friend.id
        json.username friend.username
        json.profile_photo friend.profile_photo.attached? ? url_for(friend.profile_photo) : ""  
  end
end

json.requestees do 
  json.array! user.requestees do |requestee|
        json.id requestee.id
        json.username requestee.username
        json.profile_photo requestee.profile_photo.attached? ? url_for(requestee.profile_photo) : ""  
  end
end