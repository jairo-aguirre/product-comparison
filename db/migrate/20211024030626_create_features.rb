class CreateFeatures < ActiveRecord::Migration[6.1]
  def change
    create_table :features do |t|
      t.references :product, index: true, foreign_key: true

      t.string :feature_name
      t.string :feature_value

      t.timestamps
    end
  end
end
