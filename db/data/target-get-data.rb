

require 'rest-client'
require 'json'
require './target-womens-list'

#electronics catid 44
rm_array = []

@computers_ids.each do |id|
 #url = "https://target1.p.rapidapi.com/products/v3/get-details?tcin=#{id}&store_id=911"


#rm = RestClient.get(
  url.strip,
headers={
  'x-rapidapi-host': 'target1.p.rapidapi.com',
  'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
})

rm_array.push(JSON.parse(rm))
end



#File.open("target-womens-details.rb", "w"){ |f| f.write rm_array }