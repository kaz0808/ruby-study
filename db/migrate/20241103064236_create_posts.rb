class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :category
      t.string :priority
      t.text :content

      t.timestamps
    end
  end
end
