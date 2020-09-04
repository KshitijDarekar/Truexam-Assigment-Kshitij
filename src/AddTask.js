import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'


class AddTask extends React.Component {

    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
    // Redirect
    _handleSubmit(e) {
      e.preventDefault();
      // Working with : this.state.file
      console.log('handle uploading-', this.state.file);
      localStorage.setItem("IMAGE",this.state.file);
      if(this.state.file){
        this.props.history.push("/display");   //Redirects from='/addtask/'  to='/demo/'

      }
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
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="select-text">Please select an Image for Preview</div>);
      }
      localStorage.setItem('image-data',imagePreviewUrl)
  
      return (
        <div className="previewComponent">
          <Link className="logout-btn" to='/logout'><button className='move-top' type="button">Logout</button></Link>
          <h1 style={{color :'darkcyan'}}>Add Task and Upload your Image here</h1>
          <div className="form-container">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
              
              <input id="file-upload" 
              type="file"
              accept="image/*" 
              capture="camera" 
              onChange={(e)=>this._handleImageChange(e)} />

              <div className="imgPreview">
              {$imagePreview}
            </div>
              <button className="submit-btn" 
                type="button" 
                onClick={(e)=>this._handleSubmit(e)}>Upload Image
              </button>
          </form>
          </div>
        </div>
      )
    }
  }

  


export default AddTask;