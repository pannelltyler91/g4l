import {Component} from 'react';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            LoggedIn : false
        }
    }
    render(){
        return(
            <div>
                <form action='http://localhost:3001/api/customer/login' method='POST'>
                    <label forhtml='username'>Email:</label>
                    <br></br>
                    <input type='text' name='username' id='username'></input>
                    <br></br>
                    <label forhtml='password'>Password:</label>
                    <br></br>
                    <input type='password' name='password' id='password'></input>
                    <br></br>
                    <input type='submit' name='submit' value='Login'></input>
                </form>
            </div>
        )
    }
}

export default Login;