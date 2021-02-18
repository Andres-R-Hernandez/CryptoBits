class CreateCryptocurrencies < ActiveRecord::Migration[6.0]
  def change
    create_table :cryptocurrencies do |t|
      t.string :coingecko_ID
      t.string :name

      t.timestamps
    end
  end
end
