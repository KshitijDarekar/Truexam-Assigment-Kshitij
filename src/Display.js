import React from "react";
import {Link} from 'react-router-dom';
import './App.css';

function Display(){
    const url = localStorage.getItem('image-data')
    const style={
        maxWidth:'300px',
        maxHeight:'300px',
        display:'flex',
        flex:'flex-wrap',
        position:'absolute',
        left:'50%',
        top:'25%',
        borderWidth: '5px',
        borderStyle: 'ridge',
        padddingTop:'5rem'
    }
    return(
        <div className="image-review">
            <Link className="logout-btn" to='/logout'><button  type="button">Logout</button></Link>
            <h1 style={{textAlign:'center',color:'darkcyan',paddingTop:'4rem'}}>View the Uploaded Image Here</h1>
            <img style={style}  src={url} />
        </div>
        
    )
}

export default Display;