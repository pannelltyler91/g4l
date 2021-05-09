import {Component} from 'react';

class Signup extends Component{
    render(){
        return(
            <div>
                <form>
                    <label forHtml='username'>Username/Email:</label>
                    <br></br>
                    <input type='text' name='username' id='username'></input>
                    <br></br>
                    <label forHtml='password'>Password:</label>
                    <br></br>
                    <input type='password' name='password' id='password'></input>
                    <input type='submit' name='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}

export default Signup;