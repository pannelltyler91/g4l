import {Component} from 'react';
import Logout from './logout';

class Customerprofile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clientInfo : []
        }
    }
    render(){
        return(
            <div>
                <h2> Customer Profile</h2>
                <p>You are currently on your profile</p>
                <Logout></Logout>
            </div>

        )
    }
}

export default Customerprofile;