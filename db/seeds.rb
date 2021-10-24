# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require './db/categories-decoded'
require './db/products-decoded'
@categories_unique.each do |category|
  Category.create!(
    
    name: category[:name]
    )
end

cat1 = Category.find_or_create_by! id: 1
cat2 = Category.find_or_create_by! id: 2
cat3 = Category.find_or_create_by! id: 3
cat4 = Category.find_or_create_by! id: 4
cat5 = Category.find_or_create_by! id: 5
cat6 = Category.find_or_create_by! id: 6
cat7 = Category.find_or_create_by! id: 7


@products_modified.each do |product|
  if product[:category_id] = 1
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
  if product[:category_id] = 2
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
    if product[:category_id] = 3
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
      if product[:category_id] = 4
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
        if product[:category_id] = 5
          cat5.products.create!(
            name: product[:name],
            description: product[:description],
            image: product[:image],
            price_cents: product[:price_cents],
            rating: product[:rating],
            sale: product[:sale],
            url: product[:url]
            
          )
          end
          if product[:category_id] = 6
            cat6.products.create!(
              name: product[:name],
              description: product[:description],
              image: product[:image],
              price_cents: product[:price_cents],
              rating: product[:rating],
              sale: product[:sale],
              url: product[:url]
              
            )
            end
            if product[:category_id] = 7
              cat7.products.create!(
                name: product[:name],
                description: product[:description],
                image: product[:image],
                price_cents: product[:price_cents],
                rating: product[:rating],
                sale: product[:sale],
                url: product[:url]
                
              )
              end
  
end