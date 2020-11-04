class TagsController < ApplicationController
    def index
        @tags = Tag.all.where(author_id: current_user.id)
    end

    def show
        @tag = Tag.
    end
end