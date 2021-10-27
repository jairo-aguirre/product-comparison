

require 'rest-client'
require 'json'
require './target-womens2'

#electronics catid 44
rm_array = []

@womens_ids.each do |id|
 #url = "https://target1.p.rapidapi.com/products/v3/get-details?tcin=#{id}&store_id=911"
#url = "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xu2a&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance"

#rm = RestClient.get(
  url.strip,
headers={
  'x-rapidapi-host': 'target1.p.rapidapi.com',
  'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
})

#rm_array.push(JSON.parse(rm))
end



#File.open("target-womens-details2.rb", "w"){ |f| f.write rm_array }