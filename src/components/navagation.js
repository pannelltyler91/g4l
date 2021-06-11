import {Component} from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../components/login';
import Signup from '../components/signup';
import NavBar from 'react-bootstrap/Navbar';






class Navagation extends Component{
    render(){
       
        return(
            <div>
            

                <NavLink to='/'>| Home </NavLink> 
                <NavLink to='/login'>| Login |</NavLink> 
                <NavLink to='/signup'> Signup |</NavLink> 
           
                
                                <Switch>
                                    <Route exact path='/login' component={Login}></Route>
                                    <Route exact path='/signup' component={Signup}></Route>
                                    
                                   
                                </Switch>
                

            </div>
                    
                        
                    
               
        )
    }
}



export default Navagation;