class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            Notebook.create!(name: "My Notebook", author_id: @user.id)
            @user.default_notebook=Notebook.where(name: "My Notebook", author_id: @user.id)[0].id
            @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password, :user_icon)
    end
end
