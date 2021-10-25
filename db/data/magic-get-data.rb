require 'rest-client'
require 'json'
require './magic-shoes'

#electronics catid 702
rm_array = []

#@magic_clothing_ids.each do |id|
 url = "https://magic-aliexpress1.p.rapidapi.com/api/product/#{id}"


#rm = RestClient.get(
  url.strip,
headers={
  'x-rapidapi-host': 'magic-aliexpress1.p.rapidapi.com',
  'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
})

rm_array.push(JSON.parse(rm))
end



#File.open("magic-shoes-details.rb", "w"){ |f| f.write rm_array }