class Api::FeaturesController < ApplicationController
  def index
    @features = Feature.all
    @types=Feature.select(:typeOf).group(:typeOf)
    render :json => {
      features: @features,
      types:@types
  }
end

def create
  
  @array = feature_params[:product_ids].split(",")
  @features = Feature.where(product_id: @array)
  
  @products = Product.find(@array)
  render :json => {
    features: @features,
    products: @products
  }
  puts @features
end

private
def feature_params
  params.permit(:user_id, :product_ids)
end

end
