class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.where.not(name: [nil, ""])
    render :json => {
      categories: @categories
  }
  end
end
