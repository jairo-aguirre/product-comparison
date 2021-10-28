class Api::FeaturesController < ApplicationController
  def index
    @features = Feature.all
    @types=Feature.select(:typeOf).group(:typeOf)
    render :json => {
      features: @features,
      types:@types
  }
end

end
