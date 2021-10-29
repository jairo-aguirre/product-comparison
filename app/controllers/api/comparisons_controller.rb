class Api::ComparisonsController < ApplicationController

    def index
      @comparisons = Comparison.first
      @compareProducts = []
      @comparisons[:product_ids].each do |id|
        puts id
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
      puts 'comp paramss'
      puts comparison_params
      @comparison = Comparison.new(comparison_params)
  
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
