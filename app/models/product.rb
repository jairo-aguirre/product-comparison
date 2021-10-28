class Product < ApplicationRecord
  belongs_to :categories, optional: true
  has_many :features
 
end
