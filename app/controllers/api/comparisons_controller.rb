class Api::ComparisonsController < ApplicationController
    
    def index
      @comparisons = Comparison.first
      @compareProducts = []
      @comparisons[:product_ids].each do |id|
        
        @fullProduct = Product.find_by(id: id)
        @compareProducts.push(@fullProduct)
        
      end
      
      
      render :json => {
        comparisons: @comparisons,
        products: @compareProducts
        
      }
    end
  
    def show
     
      
     
    end
  
    def new
      @comparison = Comparison.new
    end
  
    def edit
    end
  
    def create

      @array = comparison_params[:product_ids].split(",")

      @comparison = Comparison.new(:user_id => comparison_params[:user_id], :product_ids => @array)
      if @comparison.save
        render :json => {
          comparisons: @comparison
      }
      end
    end
  
    def destroy
      @comparison.destroy
  
    end
  
    private
    def set_comparison
      @comparison = Comparison.find(params[:id])
    end
  
    def comparison_params
      params.permit(:user_id, :product_ids)
    end
  
end
