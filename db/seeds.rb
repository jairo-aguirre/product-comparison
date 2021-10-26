# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require './db/data/categories-decoded'
require './db/data/products-decoded'
require './db/data/magic-mens-clothing-details'
require './db/data/magic-computer-details'
require './db/data/magic-shoes-details'
require './db/data/magic-womens-clothing-details'
require './db/data/target-electronics-details'
require './db/data/target-mens-details'
require './db/data/target-womens-details'

#cat1 is shoes
Category.create!(name: "Shoes")

#cat 2 is mens clothing
Category.create!(name: "Men's Clothing")

Category.create!(name: "Electronics")

Category.create!(name: "Women's Clothing")

cat1 = Category.find_or_create_by! name: "Shoes"
cat2 = Category.find_or_create_by! name: "Men's Clothing"
cat3 = Category.find_or_create_by! name: "Electronics"
cat4 = Category.find_or_create_by! name: "Women's Clothing"
cat5 = Category.find_or_create_by! id: 5
cat6 = Category.find_or_create_by! id: 6
cat7 = Category.find_or_create_by! id: 7


#asos shoes
@asos_shoes.each do |product|
  
  cat1.products.create!(
    name: product[:name],
    description: product[:description],
    image: "https://"+product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )
  
end

@magic_mens_clothing.each do |product|

  cat2.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

@magic_computers_details.each do |product|

  cat3.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

@magic_shoes.each do |product|

  cat1.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

@magic_womens.each do |product|

  cat4.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

@target_electronics.each do |product|

  cat3.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

@target_mens.each do |product|

  cat2.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

@target_womens.each do |product|

  cat4.products.create!(
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url]
  )

end

