json.extract! user, :username, :id, :email, :friends, :requestees, :requesters
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : ""
json.profile_photo user.profile_photo.attached? ? url_for(user.profile_photo) : ""
