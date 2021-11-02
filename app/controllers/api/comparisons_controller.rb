class Api::ComparisonsController < ApplicationController
    
    def index
      @comparisons = Comparison.first
      @compareProducts = []
      @comparisons[:product_ids].each do |id|
        puts id
        @fullProduct = Product.find_by(id: id)
        @compareProducts.push(@fullProduct)
        
      end
     
      @array = JSON.parse(cookies[:comparison])
      @products = Product.find(@array)
      render :json => {
        comparisons: @comparisons,
        products: @compareProducts,
        cookies: @products
        
      }
    end
  
    def update
      @array = comparison_params[:product_ids].split(",")

      update_comparison(@array)
      
     
    end
  
    def new
      @comparison = Comparison.new
      
    end
  
    def edit
    end
  
    def create
      puts "comp params"
      puts "cookies"

      
     

      @array = comparison_params[:product_ids].split(",")

      @comparison = Comparison.new(:user_id => comparison_params[:user_id], :product_ids => @array)
      
      if @comparison.save
        render :json => {
          comparisons: @comparison
      }
      end
    end

  
  
    private
  
  
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
