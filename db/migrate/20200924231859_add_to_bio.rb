class AddToBio < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthday, :date
    add_column :users, :gender, :string
    add_column :users, :bio, :string
    add_column :users, :relationship_status, :string
  end
end
