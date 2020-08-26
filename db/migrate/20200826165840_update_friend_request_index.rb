class UpdateFriendRequestIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :friend_requests, :requester_id
    remove_index :friend_requests, :requestee_id
  end
end
