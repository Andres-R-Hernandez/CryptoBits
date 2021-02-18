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