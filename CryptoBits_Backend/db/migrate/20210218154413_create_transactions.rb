class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.references :cryptocurrency, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.float :crypto_amount
      t.float :cash_amount
      t.float :crypto_trade_price

      t.timestamps
    end
  end
end
