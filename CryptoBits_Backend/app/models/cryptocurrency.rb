class Cryptocurrency < ApplicationRecord
    has_many :users
    has_many :cryptocurrencies, through: :users
  
end
