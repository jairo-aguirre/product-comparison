# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require './db/categories-decoded'
require './db/products-decoded'


  cat1 = Category.create(
    name: 'Shoes'
    )


@products_array.each do |product|
  cat1.products.create!(
    id: product[:id],
    name: product[:name],
    description: product[:description],
    image: product[:image],
    price_cents: product[:price_cents],
    rating: product[:rating],
    sale: product[:sale],
    url: product[:url],
  )
end