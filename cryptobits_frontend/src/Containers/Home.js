import React, { Component } from 'react'
import PancakePlate from '../Components/PancakePlate'
import Wallet from '../Components/Wallet'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>HELLO</h1>
                <PancakePlate/>
                <Wallet/>
            </div>
        )
    }
}
