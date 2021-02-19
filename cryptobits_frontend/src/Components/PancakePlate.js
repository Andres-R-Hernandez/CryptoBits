import React, { Component } from 'react'
import CryptoPancake from './CryptoPancake.js'

export default class PancakePlate extends Component {
    renderCoinData = (coingecko_ID) => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coingecko_ID}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    }    

    renderPancakes = () => {
        return this.props.cryptocurrencies.map((coin,i)=><CryptoPancake coinData={this.renderCoinData(coin.coingecko_ID)} key={i} {...coin}/>)
    }
    
    render() {        
        return (
            <div>
                <h2>Currently Trading These Currencies</h2>
                {this.renderPancakes()}
            </div>
        )
    }
}
