import React, { Component } from 'react'
import PancakePlate from '../Components/PancakePlate'
import Wallet from '../Components/Wallet'

export default class Home extends Component {
    state = {
    cryptocurrencies: []
    }

    componentDidMount() {
    fetch('http://localhost:3000/cryptocurrencies')
    .then(resp=>resp.json())
    .then(cryptos=>{
        this.setState({
        cryptocurrencies: cryptos
        })
    })
    }
    
    render() {
        return (
            <div id='home'>
                <div style={{'backgroundColor':'white', opacity:0.75}}>
                    <h1>Welcome!</h1>
                    <PancakePlate cryptocurrencies={this.state.cryptocurrencies}/>
                    <Wallet/>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        )
    }
}
