class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:show, :update, :index]
  
    def index
    @users = User.all 
    render :index
  end 

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 401
    end
  end 

  def edit 
    @user = User.find_by(id: params[:id])
    render :edit
  end 

  def update
    @user = User.find_by(id: params[:id])
    if @user.id == current_user.id 
      @user.update(user_params)
      render :show
    else 
      render json: @user.errors.full_messages, status: 401
    end
  end 

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :cover_photo, :profile_photo)
  end
end
