class ChangeNullValues < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :birthday, true 
    change_column_null :users, :gender, true 
    change_column_null :users, :bio, true 
    change_column_null :users, :relationship_status, true
  end
end
