class Api::ProductsController < ApplicationController
  def index
    @products = Product.all.order(created_at: :desc)
    render :json => {
      products: @products
    }
  end

  def show
    # @product = Product.find params[:id]
  end
end
