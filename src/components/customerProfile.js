import {Component} from 'react';
import Logout from './logout';

class Customerprofile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clientInfo : []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/customer/profile')
        .then(response => response.json())
        .then(data => this.setState({greeting:data.greeting}))
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