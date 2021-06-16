import {Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            비밀:'shhhh'
        }
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>

        )
    }
}

export default Home