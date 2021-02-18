# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cryptocurrency.destroy_all

bitcoin = Cryptocurrency.create(name: "Bitcoin", coingecko_ID: 'bitcoin')
dogecoin = Cryptocurrency.create(name: "DogeCoin", coingecko_ID: 'dogecoin')
ethereum = Cryptocurrency.create(name: "Ethereum", coingecko_ID: 'ethereum')
tether = Cryptocurrency.create(name: "Tether", coingecko_ID: 'tether')
cardano = Cryptocurrency.create(name: "Cardano", coingecko_ID: 'cardano')

user1 = User.create(name: "John", email: "john@gmail.com", password: "password", cash: 1000)
user2 = User.create(name: "Adam", email: "adam@gmail.com", password: "password", cash: 50)
user3 = User.create(name: "Sarah", email: "sarah@gmail.com", password: "password", cash: 100000)
user4 = User.create(name: "Charles", email: "charles@gmail.com", password: "password", cash: 35000)

trans1 = Transaction.create(user: user1, cryptocurrency: bitcoin, crypto_amount: 100, cash_amount: 10000, crypto_trade_price: 100)
trans2 = Transaction.create(user: user1, cryptocurrency: dogecoin, crypto_amount: 1, cash_amount: 10, crypto_trade_price: 10)
trans3 = Transaction.create(user: user2, cryptocurrency: ethereum, crypto_amount: 1, cash_amount: 100, crypto_trade_price: 100)
trans4 = Transaction.create(user: user2, cryptocurrency: tether, crypto_amount: 1, cash_amount: 35, crypto_trade_price: 35)
trans5 = Transaction.create(user: user3, cryptocurrency: bitcoin, crypto_amount: 50, cash_amount: 500000, crypto_trade_price: 10000)
trans6 = Transaction.create(user: user3, cryptocurrency: dogecoin, crypto_amount: 20, cash_amount: 1000, crypto_trade_price: 50)
trans7 = Transaction.create(user: user4, cryptocurrency: ethereum, crypto_amount: 30, cash_amount: 21000, crypto_trade_price: 700)
trans8 = Transaction.create(user: user4, cryptocurrency: tether, crypto_amount: 45, cash_amount: 1800, crypto_trade_price: 40)
trans9 = Transaction.create(user: user3, cryptocurrency: bitcoin, crypto_amount: 45, cash_amount: 900, crypto_trade_price: 20)
trans10 = Transaction.create(user: user3, cryptocurrency: cardano, crypto_amount: 100, cash_amount: 1000, crypto_trade_price: 10)

