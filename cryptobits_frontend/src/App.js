import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Containers/Home'
import Account from './Containers/Account'
import Trade from './Containers/Trade'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    user: {}
  }

   componentDidMount = () => {
    fetch(`http://localhost:3000/users/1`)
      .then(res => res.json())
      .then(userData => this.setState({user: userData}))
  }


  render() {
    return (
      <Router>
      <div id='app'>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/account'>
          <Account userData={this.state.user} />
        </Route>
        <Route exact path='/trade' component={Trade}/>
        {/*<Route exact path='/zzz' component={zzz}/> */}
      </div>
    </Router>
    );
  }
}