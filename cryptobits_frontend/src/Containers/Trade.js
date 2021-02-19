import React, { Component } from 'react'
import TradeForm from '../Components/TradeForm'

export default class Trade extends Component {
    state = {
        cryptoPrice: {
            "bitcoin": {
              "usd": 0
            }
          }
    }
    
    createTransaction = () => {

    }

    fetchCurrentPrice = (coingecko_ID) => {
        console.log(coingecko_ID)

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_ID}&vs_currencies=USD`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                cryptoPrice: data
            })
        })
    }
    
    render() {
        return (
            <div>
                TRADE CONTAINER
                <TradeForm cryptoData={this.state.cryptoPrice} fetchCurrentPrice={this.fetchCurrentPrice} createTransaction={this.createTransaction}/>
            </div>
        )
    }
}
