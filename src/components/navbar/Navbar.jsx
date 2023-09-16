
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './style.scss';
import logo from '../../assets/images/Vectorlogo_xbox.png';
import FileUploadPopup from "../fileupload/fileupload";
import Modal from '@mui/material/Modal';
import React from 'react';
import {useLocation } from 'react-router-dom';

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className="toolbar">
            <a href='/home' className='logo'><img src={logo} alt="logo" className='l'/>
            <h1 className='brandName'>JourneyJunction</h1></a>
           { location.pathname === '/home' && (<div>
          <Button onClick={handleOpen}  className="login">Proceed with your Itinerary</Button>
          <Modal open={open} className="modal"
        onClose={handleClose} ><FileUploadPopup /></Modal>
          </div>)}
        </Toolbar>
      </AppBar>
    </>
  );
}