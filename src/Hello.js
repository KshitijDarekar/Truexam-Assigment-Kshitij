import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom';
import './App.css'

class Hello extends React.Component {

//     imageUpload = (e) => {
//         const file = e.target.files[0];
//         getBase64(file).then(base64 => {
//           localStorage["fileBase64"] = base64;
//           console.debug("file stored",base64);
//         });   
//     };          
  
//     render() {
//       return <input 
//        type="file" 
//        id="imageFile" 
//        name='imageFile' 
//        onChange={this.imageUpload} />;
//     }
//   }
  
  
//   const getBase64 = (file) => {
//     return new Promise((resolve,reject) => {
//        const reader = new FileReader();
//        reader.onload = () => resolve(reader.result);
//        reader.onerror = error => reject(error);
//        reader.readAsDataURL(file);
//     });
//   }


//==============================================//


    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }

    // Redirect

    
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
      localStorage.setItem("IMAGE",this.state.file);
      this.props.history.push("/demo");
      // <Redirect from='/addtask/'  to='/demo/' />
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
      console.log(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img width='300px' height='300px' src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="select-text">Please select an Image for Preview</div>);
      }
      localStorage.setItem('image-data',imagePreviewUrl)
  
      return (
        <div className="previewComponent">
          <h1>Add Task and Upload your Image here</h1>
          <div className="form-container">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
              type="text"
              placeholder="Task Name"
              onChange={(e)=>this._handleImageChange(e)} />
              <br/>
            <input className="fileInput" 
              type="file"
              accept="image/*" 
              capture="camera" 
              onChange={(e)=>this._handleImageChange(e)} />
              <br/>
              
            <input className="fileInput" 
              type="text"
              placeholder="add your task"
              onChange={(e)=>this._handleImageChange(e)} />
              <br/>
              <div className="select-text"></div>
              <button className="submit-btn" 
                type="button" 
                onClick={(e)=>this._handleSubmit(e)}>Upload Image
              </button>
          </form>
            <div className="imgPreview">
              {$imagePreview}
            </div>
          </div>
        </div>
      )
    }
  }

  //ReactDOM.render(<Hello/>, document.getElementById("mainApp"));


export default Hello;