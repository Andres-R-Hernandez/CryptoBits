import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Containers/NavBar.js';

function App() {
  return (
    <Router>
    <div>
      <NavBar/>
      {/* <Route exact path='/' component={Home}/>
      <Route exact path='/xxx' component={xxx}/>
      <Route exact path='/yyy' component={yyy}/>
      <Route exact path='/zzz' component={zzz}/> */}
    </div>
  </Router>
  );
}

export default App;
