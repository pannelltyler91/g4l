import {Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            비밀:'shhhh'
        }
    }
    componentDidMount(){
    fetch('http://localhost:3001/api/home')
    .then(response => response.json())
    .then(data => this.setState({message:data.message}))
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
                <p>{this.state.message}</p>
            </div>

        )
    }
}

export default Home