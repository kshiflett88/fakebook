class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:show, :update, :index, :destroy, :create] 
 
  def index
    
        if params[:post][:index_type] == 'wall'
            user = User.find_by(id: params[:post][:wall_id].to_i)
            @posts = user.wall_posts
            
            render :index
        elsif params[:post][:index_type] == 'newsfeed' 
            @posts = Post.joins(:user_friends).where("friendships.friend_two_id  = ?", current_user.id)
            @user = User.find_by(id: current_user.id) 
            @authored_posts = @user.authored_posts 
            render :index
        end 
    end


  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id 
    if @post.save 
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end 

  def show
    @post = Post.find_by(id: params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if ( current_user.id == @post.author_id || current_user.id == @post.wall_id )
      @post.destroy
      render :show
    else 
      render json: ["This is not your post to destroy!"], status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render :show
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end 

  private
  def post_params
    params.require(:post).permit(:author_id, :body, :wall_id)
  end
end
