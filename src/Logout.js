import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
class Logout extends React.Component{
    
    constructor(props){
        super(props)
            localStorage.removeItem("token")
        
    }
    render(){
        return(
        <div className='logout-container'>
            <h1>You have been logged Out !</h1>
            <Link to='/'><button className="login-btn">Login</button></Link>
        </div>
        )
        
    }
}

export default Logout; 
