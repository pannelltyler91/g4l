import {BrowserRouter} from 'react-router-dom';
import Navagation from './components/navagation';
import {Component} from 'react';
import './App.css';



class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>G4L</h1>
 
    <Navagation/>

    </div>
    );
  }
}
export default App;
