import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './style.scss';
import logo from '../../assets/images/Vectorlogo_xbox.png';

export default function ButtonAppBar() {
 
  return (
   
      <AppBar position="static" className="navbar">
        <Toolbar className="toolbar">
            <div className='logo'><img src={logo} alt="logo" className='l'/>
            <h1 className='brandName'>Xbox</h1></div>
            <div>
          <Button className="button" >Home</Button>
          <Button className="button">Discover</Button>
          <Button className="button">Special Deals</Button>
          <Button className="button">Contact</Button>
          <Button className="login" >Log In</Button></div>
        </Toolbar>
      </AppBar>
    
  );
}