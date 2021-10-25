require 'rest-client'
require 'json'
require './asos-womens-products'
@asos_womens_clothing = []

#needs new auth then it's good
puts @product_ids
@product_ids.each do |id|
  #url = "https://asos2.p.rapidapi.com/products/v3/detail?id=#{id}&lang=en-US&store=US&sizeSchema=US&currency=USD"



#  rm = RestClient.get(
  url.strip,
headers={
  'x-rapidapi-host': 'asos2.p.rapidapi.com',
  'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
})

rm_array = JSON.parse(rm)

@asos_womens_clothing.push(rm_array)
end

#File.open("asos-womens-clothing.rb", "w"){ |f| f.write @asos_womens_clothing }