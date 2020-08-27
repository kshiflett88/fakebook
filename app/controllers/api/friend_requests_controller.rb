class Api::FriendRequestsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    requester_id, requestee_id = params[:requester_id].to_i, params[:requestee_id].to_i
    
    if requester_id == current_user.id 
      @friend_request = FriendRequest.new(requester_id: requester_id, requestee_id: requestee_id)
    
      if @friend_request.save
        @user = current_user
        render 'api/users/show_current'
      else
        render json: @friend_request.errors.full_messages, status: 404
      end 
    else
      render json: ["Only current user can make friend requests"], status: 404
    end 
      
  end 

  def destroy 
    requester_id, requestee_id = params[:requester_id].to_i, params[:requestee_id].to_i
    if ( requester_id == current_user.id || current_user.id == requestee_id )
      # debugger
      @friend_request = FriendRequest.find_by(requester_id: requester_id, requestee_id: requestee_id)
      if @friend_request
        @friend_request.destroy
        @user = current_user
        render 'api/users/show_current'
      else 
        render json: @friend_request.errors.full_messages, status: 404
      end
    else
      render json: ["Only current user can cancel/reject/accept friend requests"], status: 404
    end
  end 

#   private
#   def friend_request_params
#     params.require(:friend_request).permit(:requester_id, :requestee_id)
#   end 
end
