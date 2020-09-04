import React from "react"


function Display(){
    const url = localStorage.getItem('image-data')
    const style={
        maxWidth:'300px',
        maxHeight:'300px',
        display:'flex',
        flex:'flex-wrap',
        position:'absolute',
        left:'50%',
        top:'25%'
    }
    return(
        <div className="image-review">
            <h1 style={{textAlign:'center'}}>View the Uploaded Image Here</h1>
            <img style={style}  src={url} />
        </div>
        
    )
}

export default Display;