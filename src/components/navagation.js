import {Component} from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../components/home';
import Login from '../components/login';
import Signup from '../components/signup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/link.css';



class Navagation extends Component{
    render(){
       
        return(
            <div>

                <Navbar  sticky='top'variant="dark" expand="lg" className='navbar'>
                    <Navbar.Brand href="/">G4L</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <NavLink to='/login'><Nav.Link href='/login' >| Login |</Nav.Link></NavLink>
                        <NavLink className='cart' to='/signup' ><Nav.Link href='/signup'>Signup </Nav.Link></NavLink>   
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                                <Switch>
                                    <Route exact path='/' component={Home}></Route>
                                    <Route exact path='/login' component={Login}></Route>
                                    <Route exact path='/signup' component={Signup}></Route>
                                   
                                </Switch>

            </div>
                    
                        
                    
               
        )
    }
}



export default Navagation;