class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      

      t.string :name
      t.text :description
      t.string :image
      t.decimal :price_cents
      t.decimal :rating
      t.boolean :sale
      t.string :url

      t.timestamps
    end
  end
end
