
import {Component} from 'react';

class Signup extends Component{
    render(){
        return(
            <div>
                <form action='http://localhost:3001/api/customer/signup' method='POST'>
                    <label forhtml='username'>Email:</label>
                    <br></br>
                    <input type='text' name='username' id='username'></input>
                    <br></br>
                    <label forhtml='password'>Password:</label>
                    <br></br>
                    <input type='password' name='password' id='password'></input>
                    <br></br>
                    <label forhtml='confirmPassword'> Confirm Password:</label>
                    <br></br>
                    <input type='password' name='confirmPassword' id='confirmPassword'></input>
                    <br></br>
                    <label forhtml='password'>Address:</label>
                    <br></br>
                    <input type='text' name='address' id='address'></input>
                    <br></br>
                    <label forhtml='password'>Phone number:</label>
                    <br></br>
                    <input type='text' name='phoneNumber' id='phoneNumber'></input>
                    <br></br>
                    <input type='submit' name='submit' value='Signup'></input>
                </form>
            </div>
        )
    }
}

export default Signup;