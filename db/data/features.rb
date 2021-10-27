require './magic-computers-details2'
require './magic-mens-clothing-details'
require './magic-womens-details2'
require './target-comp-details2'
require './target-mens-details2'
require './target-womens-details2'

features = []

@target_womens_array.each do |object|
  puts object
  object.each do |key, value|
    puts key, value
  end
end

puts features