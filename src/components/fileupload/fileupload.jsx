import React, { useState } from 'react';
import  "./style.scss"
import { useNavigate } from 'react-router-dom';

const FileUploadPopup = () => {
    const navigate = useNavigate()
    return (
      <div  className='f'>

        <h2>Upload a File</h2>
        <input type="file"  />
        <div className="buttonwrapper">
            <button className='fileUpload' onClick={() => {navigate('/map')}}>Upload</button>
            <button className='fileUpload' onClick={() => {navigate('/home')}}>Cancel</button>
        </div>
      </div>
    );
  };
  
  export default FileUploadPopup;