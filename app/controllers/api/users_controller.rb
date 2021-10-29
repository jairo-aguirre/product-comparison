class Api::UsersController < ApplicationController
  def index
end
  def show
    
    @user = User.find(params[:id])
    
        if @user
           render json: {
           user: @user
        }
        else
           render json: {
           status: 500,
           errors: ['user not found']
         }
        end
   end
   
end
