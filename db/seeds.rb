# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require './db/data/products-decoded'
require './db/data/asos-mens-details'
require './db/data/asos-womens-details2'
require './db/data/magic-mens-clothing-details'
require './db/data/magic-computers-details2'
require './db/data/magic-shoes-details'
require './db/data/magic-womens-details2'
require './db/data/target-comp-details2'
require './db/data/target-mens-details2'
require './db/data/target-womens-details2'



User.create!(first_name: "Rita", last_name: "Morgan",email:"RobertCBrown@test.com")
 User.create!(first_name: "Victoria", last_name: "Dyer",email:"ClayJWilson@test.us")
 User.create!(first_name: "Joseph", last_name: "Gibbons",email:"JosephGibbons@test.us")

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

@magic_womens_clothing.each do |product|

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

@magic_mens_clothing_features.each do |product|
  
  Feature.create!(
    product_id: product[:product_id],
    season: product["season"],
    material: product["material"],
    sleeveLength: product["sleeveLength"],
    where: product["where"],
    typeOf: product["type"],
    pattern: product["pattern"]
  )

end

@magic_comp_features.each do |product|
  Feature.create!(
    product_id: product[:product_id],
    brand: product["brand"],
    RAM: product["RAM"],
    storage: product["storage"],
    where: product["where"],
    typeOf: product["type"],
    weight: product["weight"],
    operatingSystem: product["operatingSystem"],
    screenSize: product["screenSize"],
    resolution: product["resolution"]
  )
end

@magic_womens_clothing_features.each do |product|
  Feature.create!(
    product_id: product[:product_id],
    season: product["season"],
    material: product["material"],
    sleeveLength: product["sleeveLength"],
    where: product["where"],
    typeOf: product["type"],
    pattern: product["pattern"],
    fabric: product["fabric"]
  )
end

@target_elec_array.each do |product|
  Feature.create!(
    product_id: product[:product_id],
    brand: product["brand"],
    RAM: product["RAM"],
    storage: product["storage"],
    where: product["where"],
    typeOf: product["type"],
    weight: product["weight"],
    operatingSystem: product["operatingSystem"],
    screenSize: product["screenSize"],
    resolution: product["resolution"]
  )
end

@target_mens_array.each do |product|
  Feature.create!(
    product_id: product[:product_id],
    season: product["season"],
    material: product["material"],
    sleeveLength: product["sleeveLength"],
    where: product["where"],
    typeOf: product["type"],
    pattern: product["pattern"],
    fabric: product["fabric"],
    material1: ["material1"],
    material2: ["material2"],
    material3: ["material3"],
    material4: ["material4"]
  )
end

@target_womens_array.each do |product|
  Feature.create!(
    product_id: product[:product_id],
    season: product["season"],
    material: product["material"],
    sleeveLength: product["sleeveLength"],
    where: product["where"],
    typeOf: product["type"],
    pattern: product["pattern"],
    fabric: product["fabric"],
    material1: ["material1"],
    material2: ["material2"],
    material3: ["material3"],
    material4: ["material4"]
  )
end

User.create!(
  first_name: "Lisa"
)

Comparison.create!(
  user_id: 1,
  product_ids: [150, 160, 170]
)





