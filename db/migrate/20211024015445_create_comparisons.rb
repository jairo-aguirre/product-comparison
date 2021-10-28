class CreateComparisons < ActiveRecord::Migration[6.1]
  def change
    create_table :comparisons do |t|
      t.references :user, index: true, foreign_key: true
      t.string :product_ids, array: true
      
      t.timestamps
    end
  end
end
