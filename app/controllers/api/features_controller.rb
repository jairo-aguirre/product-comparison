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
  puts feature_params
  @array = feature_params[:product_ids].split(",")
  @features = Feature.find( @array)
  puts 'features'
  puts @features
  @products = Product.find(@array)
  render :json => {
    features: @features,
    products: @products
  }
end

private
def feature_params
  params.permit(:user_id, :product_ids)
end

end
