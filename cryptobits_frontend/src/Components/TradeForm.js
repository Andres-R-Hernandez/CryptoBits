import React, { Component } from 'react'

export default class TradeForm extends Component {
    state = {
        buy: true,
        cryptocurrency: "Bitcoin",
        user_id: "",
        crypto_amount: 0,
        cash_amount: 0,
        crypto_trade_price: {}
    }

    componentDidMount() {
        // console.log(this.props.fetchCurrentPrice(this.state.cryptocurrency))

        this.props.fetchCurrentPrice(this.state.cryptocurrency)

        // let price = this.props.fetchCurrentPrice(this.state.cryptocurrency)
        
        this.setState({
            crypto_trade_price: this.props.cryptoData
        })
    }

    // componentDidUpdate() {
    // }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.fetchCurrentPrice(e.target.value)
    }

    handleCryptoChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.fetchCurrentPrice(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            crypto_amount: this.state.cash_amount/this.state.crypto_trade_price,
        })    

        console.log(e.target)
    }
    
    findUseValue = (cryptoObject) => {
       
    }
    render() {
        let crypto = Object.keys(this.props.cryptoData)[0]
        return (
            <div>
                {console.log(this.props.cryptoData[crypto].usd)}
                TRADE FORM
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    BUY or SELL? (UNDER CONSTRUCTION)
                    <br></br>
                    <select name='buy' onChange={this.handleChange}>
                        <option value={true}>BUY</option>
                        <option value={false}>SELL</option>
                    </select>
                    <br></br>
                    <br></br>
                    SELECT CRYPTO CURRENCY
                    <br></br>
                    <select name='cryptocurrency' onChange={this.handleCryptoChange}>
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='DogeCoin'>DogeCoin</option>
                        <option value='Ethereum'>Ethereum</option>
                        <option value='Tether'>Tether</option>
                        <option value='Cardano'>Cardano</option>
                    </select>
                    <br></br>
                    <br></br>
                    CURRENT CRYPTO PRICE:
                    <br></br>
                    ${this.props.cryptoData[crypto].usd}
                    <br></br>
                    <br></br>
                    CASH AMOUNT: <input name='cash_amount' value={this.state.cash_amount} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <button value='submit'>CONFIRM</button>
                </form>
            </div>
        )
    }
}