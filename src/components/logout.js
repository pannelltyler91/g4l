import {Component} from 'react';

class Logout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            LoggedIn = false
        }
    }
    render(){
        return(
            <div>
                <button>Logout</button>
            </div>
        )
    }
}

export default Logout;