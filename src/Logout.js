import React from 'react'
import {Link} from 'react-router-dom'
class Logout extends React.Component{
    
    constructor(props){
        super(props)
            localStorage.removeItem("token")
        
    }
    render(){
        return(
        <div>
            <h1>You have been logged Out</h1>
            <Link to='/'><button>Login</button></Link>
        </div>
        )
        
    }
}

export default Logout; 
