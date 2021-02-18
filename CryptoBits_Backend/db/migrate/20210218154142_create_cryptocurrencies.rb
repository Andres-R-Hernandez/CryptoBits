class CreateCryptocurrencies < ActiveRecord::Migration[6.0]
  def change
    create_table :cryptocurrencies do |t|
      t.integer :coingecko_ID

      t.timestamps
    end
  end
end
