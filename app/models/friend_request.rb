# == Schema Information
#
# Table name: friend_requests
#
#  id              :bigint           not null, primary key
#  requester_id    :integer          not null
#  requestee_id    :integer          not null
#  request_message :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class FriendRequest < ApplicationRecord
  validates :requestee_id, :requester_id, presence: true
  validates :requester_id, uniqueness: { scope: :requestee_id} 
      

  belongs_to :requestee,
    foreign_key: :requestee_id,
    class_name: :User 

  belongs_to :requester,
  foreign_key: :requester_id,
  class_name: :User 

end
