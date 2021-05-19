import e from 'express';
import {Component} from 'react';

class Signup extends Component{
    render(){
        _handleSubmit = (e) =>{
            e.preventDefault();
             fetch('http://localhost:3001/api/correctanswers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userSelection:userSelection}), //request body that will show in server.js//
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
        }
            )}
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