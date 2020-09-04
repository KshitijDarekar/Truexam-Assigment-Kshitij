import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect } from 'react-router-dom'

class Admin extends React.Component{
    
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }

    

    render(){

        if(this.state.loggedIn===false){
            return <Redirect to="/" />
        }
        return(
        <div >
                <Link className="logout-btn" to='/logout'><button type="button">Logout</button></Link>
            <div className="home">
            <h1 style={{color:'darkslategrey'}}>This bootcamp has 3 different tracks -
                Beginner, Intermediate and Advanced. A user (student) can create his account and register for
                only one of these tracks.
            </h1>
            <Link className="addtask-btn" to='/addtask' ><button>Add task</button></Link>
            </div>    
            
        </div>
        )
    }
}

export default Admin; 