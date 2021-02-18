class User < ApplicationRecord
  has_many :transactions
  has_many :cryptocurrencies, through: :transactions

  has_secure_password

  private

  def user_params
    params.require(:user).permit(:name, :email, :cash, :password, :password_confirmation)
  end

end
