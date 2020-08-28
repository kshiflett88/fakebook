# == Schema Information
#
# Table name: walls
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class WallTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
