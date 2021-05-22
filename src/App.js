import {BrowserRouter} from 'react-router-dom';
import Navagation from './components/navagation';
import './App.css';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Navagation/>
  </BrowserRouter>
    </div>
  );
}

export default App;
