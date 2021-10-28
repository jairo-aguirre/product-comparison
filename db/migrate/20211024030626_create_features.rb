class CreateFeatures < ActiveRecord::Migration[6.1]
  def change
    create_table :features do |t|
      t.belongs_to :product

      t.string :season
      t.string :material
      t.string :material1
      t.string :material2
      t.string :material3
      t.string :material4
      t.string :sleeveLength
      t.string :where
      t.string :typeOf
      t.string :pattern
      t.string :brand
      t.string :screenSize
      t.string :weight
      t.string :RAM
      t.string :storage
      t.string :operatingSystem
      t.string :resolution
      t.string :fabric
     
      
      

      t.timestamps
    end
  end
end
