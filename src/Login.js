import React from 'react';
import './App.css';

import {Redirect } from 'react-router-dom'

class Login extends React.Component{
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
        this.state={
            username:'',
            password:'',
            loggedIn
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
    
            e.preventDefault()
            const {username,password}=this.state
            //login code
            if(username=="Truexam" && password==="123"){
                localStorage.setItem("token","any-random-value")
                this.setState({
                    loggedIn: true
                })
            }
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/home" />
        }
        return(
            <div className="login">
                <h1 style={{color:'darkslategrey'}}>Login</h1>

                 <form onSubmit={this.submitForm}>
                     <img className="profile" src={require('./assets/profile.png')} width='200px' height='200px' />
                     <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                     <br/>
                     <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                     <br/>
                     <div className='btn-wrapper'>
                     <input className='submit-btn'  type="submit" />
                     </div>
                     
                </form>
            </div>
        )
    }
}



export default Login ; 