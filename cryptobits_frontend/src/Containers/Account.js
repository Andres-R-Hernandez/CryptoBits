

import React, { Component } from 'react'

export default class Account extends Component {
    state = {
        cash: 0
    }
    
    render() {
        return (
            <div>
                <tr>
                    <td>Account Name /* props.account.name */</td>
                    <td>Account Email /* props.account.email */</td>
                    <td>Fund Account form goes here </td>
                    {/* <input onChange={(e) => this.setState({cash: e.target.value})} type="cash" name="cash" /> */}
                </tr>
            </div>
        )
    }
}