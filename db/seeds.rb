# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'
require 'json'
url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US'
uri = URI.parse(URI.encode(url.strip))

rm = RestClient.get(
  uri,  
headers={
  'x-rapidapi-host': 'asos2.p.rapidapi.com',
  'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
})

rm_array = JSON.parse(rm)

products_array = rm_array['products']

File.open("product-list.rb", "w"){ |f| f.write products_array }

#products_array.each do |product|
 # Product.create(
  #  name: product['name'],
   # image: product['imageUrl'],
   # price_cents: product['price']['current']['value']
  #)
#end
