class UpdateFriendRequest < ActiveRecord::Migration[5.2]
  def change
    add_index :friend_requests, [:requester_id , :requestee_id], unique: true
  end
end
