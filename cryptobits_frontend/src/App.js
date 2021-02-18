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
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/account' component={Account}/>
        {/* <Route exact path='/yyy' component={yyy}/>
        <Route exact path='/zzz' component={zzz}/> */}
      </div>
    </Router>
    );
  }
}