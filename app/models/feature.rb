class Feature < ApplicationRecord
  belongs_to :products, optional: true
end
