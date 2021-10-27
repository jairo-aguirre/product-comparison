require 'rest-client'
require 'json'
require './asos-mens-products2'
@asos_mens_clothing = []

#needs new auth then it's good
puts @product_ids
@product_ids.each do |id|
  #url = "https://asos2.p.rapidapi.com/products/v3/detail?id=#{id}&lang=en-US&store=US&sizeSchema=US&currency=USD"



#rm = RestClient.get(
  url.strip,
headers={
  'x-rapidapi-host': 'asos2.p.rapidapi.com',
  'x-rapidapi-key': 'a233dd59b2msh09f3af891b33d38p152d83jsnd05a3450eee0'
})

rm_array = JSON.parse(rm)

@asos_mens_clothing.push(rm_array)
end

#File.open("asos-mens-details.rb", "w"){ |f| f.write @asos_mens_clothing }