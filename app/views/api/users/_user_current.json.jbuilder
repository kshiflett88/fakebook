json.extract! user, :username, :id, :email 
json.cover_photo user.cover_photo.attached? ? url_for(user.cover_photo) : ""
json.profile_photo user.profile_photo.attached? ? url_for(user.profile_photo) : ""

json.requesters do
  json.array! user.requesters do |requester|
    json.set! requester.id do
        json.username requester.username
      json.set! friend.profile_photo.id do
        json.name friend.profile_photo.name
        json.dependent friend.profile_photo.dependent
      end
    end
  end
end

json.friends do
  json.array! user.friends do |friend|
    json.set! friend.id do
        json.username friend.username
        json.set! friend.profile_photo.id do
          json.name friend.profile_photo.name
          json.dependent friend.profile_photo.dependent
        end
    end
  end
end
