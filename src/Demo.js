import React from "react"

function Demo(){
    const url = localStorage.getItem('image-data')
    return(
        <div className="image-review">
            <img src={url} />
        </div>
        
    )
}

export default Demo;