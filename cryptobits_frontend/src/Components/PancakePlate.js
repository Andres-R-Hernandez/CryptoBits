import React, { Component } from 'react'
import CryptoPancake from './CryptoPancake.js'

export default class PancakePlate extends Component {
    render() {
        const renderPancakes = () => {
            return this.props.cryptocurrencies.map((coin,i)=><CryptoPancake key={i} {...coin}/>)
        }
        
        return (
            <div>
                <h2>Pancake Plate</h2>
                {renderPancakes()}
            </div>
        )
    }
}
