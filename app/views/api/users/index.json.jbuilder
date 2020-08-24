@users.each do |user| 
  json.set! user.id do
    # json.id user.id
    # json.username user.username 
    json.partial! "api/users/user", user: user
  end
end