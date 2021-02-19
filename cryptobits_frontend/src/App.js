import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Containers/Home'
import Account from './Containers/Account'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    user: {}
  }

   componentDidMount = () => {
    fetch(`URL/1`)
      .then(res => res.json())
      .then(userData => this.setState({user: userData}))

  }


  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/account' render = {<Account userData = {this.state.user} />} />
        {/* <Route exact path='/yyy' component={yyy}/>
        <Route exact path='/zzz' component={zzz}/> */}
      </div>
    </Router>
    );
  }
}