class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, except: [:password_digest, :created_at, :updated_at]
    end

end