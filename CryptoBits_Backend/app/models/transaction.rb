class Transaction < ApplicationRecord
  belongs_to :cryptocurrency
  belongs_to :user
end
