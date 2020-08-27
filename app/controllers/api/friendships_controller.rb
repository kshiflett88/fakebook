class Api::FriendshipsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :index]


  def create 
    
    friend_one_id, friend_two_id = params[:friend_one_id].to_i, params[:friend_two_id].to_i

    friend_request = FriendRequest.find_by(requestee_id: friend_one_id, requester_id: friend_two_id)
    
    
    if friend_request && current_user.id == friend_one_id
      @friendship1 = Friendship.new(friend_one_id: friend_one_id, friend_two_id: friend_two_id)
      @friendship2 = Friendship.new(friend_one_id: friend_two_id, friend_two_id: friend_one_id)

      if @friendship1.save && @friendship2.save
          friend_request.destroy
          @user = User.find(1)
          render 'api/users/show_current'
      else 
        render json: ["Unable to accept friendship"], status: 422
      end
    elsif current_user.id != friend_one_id
    
      render json: ["Only current user can accept friend reques"], status: 422
    else 
      render json: ["Friend request does not exist"], status: 422
    end
  end 

  def destroy
    friend_one_id, friend_two_id = params[:friend_one_id].to_i, params[:friend_two_id].to_i
    # debugger
    @friendship1 = Friendship.find_by(friend_one_id: friend_one_id, friend_two_id: friend_two_id)
    @friendship2 = Friendship.find_by(friend_one_id: friend_two_id, friend_two_id: friend_one_id)

    if current_user.id != friend_one_id
      render json: ["Only current user can unfriend"], status: 404
    elsif !(@friendship1 && @friendship2)
      render json: ["No existing friendship"]
    else
      @friendship1.destroy
      @friendship2.destroy
      render 'api/users/show_current'
    end
  end 

  # private

  # def friendship_params
  #   params.require(:friendship).permit(:friend_one_id, :friend_two_id)
  # end 

end
