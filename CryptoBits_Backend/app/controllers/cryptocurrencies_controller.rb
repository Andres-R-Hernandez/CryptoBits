class CryptocurrenciesController < ApplicationController
    def index
        cryptocurrency = Cryptocurrency.all
        render json: cryptocurrency
    end
end
