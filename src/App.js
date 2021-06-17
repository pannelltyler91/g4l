
import {BrowserRouter as Router,Switch,Route,NavLink,Redirect} from 'react-router-dom';
import Login from '../src/components/login';
import Signup from '../src/components/signup';
import Customerprofile from './components/customerProfile';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>G4L</h1>
      <Router>
        <NavLink to='/home'>Home |</NavLink>
        <NavLink to='/login'>Login |</NavLink>
        <NavLink to='/signup'> Signup |</NavLink>
        <NavLink to='/profile'> Profile </NavLink>

        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup}></Route>
          <Route path='/profile' component={Customerprofile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
