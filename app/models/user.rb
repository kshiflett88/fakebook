# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :email, :password_digest, :birthday, :gender, :relationship_status, :bio, presence: true
    validates :gender, inclusion: {in: ["Male", "Female", "Custom"]}
    validates :relationship_status, inclusion: {in: ["Single", "In a relationship", "Complicated", "Married", "Engaged"]}
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    
    attr_reader :password
    after_initialize :ensure_session_token
    after_initialize :ensure_session_token, :ensure_user_photo
    after_initialize :ensure_session_token, :ensure_cover_photo

  has_one_attached :cover_photo
  has_one_attached :profile_photo

  has_many :sent_friend_requests, 
    foreign_key: :requester_id,
    class_name: :FriendRequest

    has_many :incoming_friend_requests, 
        foreign_key: :requestee_id,
        class_name: :FriendRequest
    
    has_many :requesters, 
        through: :incoming_friend_requests,
        source: :requester

    has_many :requestees,
        through: :sent_friend_requests,
        source: :requestee

    has_many :friendships, 
        foreign_key: :friend_one_id,
        class_name: :Friendship

    has_many :friends, 
        through: :friendships,
        source: :friend_two

    has_many :authored_posts, 
        foreign_key: :author_id,
        class_name: :Post 

    has_many :wall_posts,
        foreign_key: :wall_id,
        class_name: :Post 
    

   def ensure_user_photo
        file = File.open('app/assets/images/default-profile-picture.jpg')
        if !self.profile_photo.attached? 
        self.profile_photo.attach(io: file, filename: 'default-profile-picture.jpg')
        end
    end


    def ensure_cover_photo
        file = File.open('app/assets/images/demo-image-default.jpg')
        if !self.cover_photo.attached? 
        self.cover_photo.attach(io: file, filename: 'demo-image-default.jpg')
        end
    end



   def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
        return nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
