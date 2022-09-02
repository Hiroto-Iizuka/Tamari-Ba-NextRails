class CreateRoads < ActiveRecord::Migration[6.1]
  def change
    create_table :roads do |t|
      t.string :title
      t.float :latitude
      t.float :longitude
      t.text :description

      t.timestamps
    end
  end
end