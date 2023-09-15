
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './style.scss';
import logo from '../../assets/images/Vectorlogo_xbox.png';

export default function ButtonAppBar() {
 
  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className="toolbar">
            <a href='/home' className='logo'><img src={logo} alt="logo" className='l'/>
            <h1 className='brandName'>JourneyJunction</h1></a>
            <div>
          <Button className="login">Proceed with your Itinerary</Button></div>
        </Toolbar>
      </AppBar>
    </>
  );
}