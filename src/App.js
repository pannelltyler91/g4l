import {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';
import Login from '../src/components/login';
import Signup from '../src/components/signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>G4L</h1>
      </header>
      <Router>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
