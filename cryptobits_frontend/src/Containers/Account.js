import React, { Component } from 'react'

export default class Account extends Component {
    state = {
        cash: 0
    }
    
    render() {
        return (
            <div>
                <h2>Name: {this.props.userData.name} </h2>
                <h2>Email: {this.props.userData.email} </h2>
                <h2>Cash Balance: ${this.props.userData.cash} </h2>
                <p>
                    { <input onChange={(e) => this.setState({cash: e.target.value})} type="cash" name="cash" placeholder="0.00"/> }
                </p>
            </div>
        )
    }
}