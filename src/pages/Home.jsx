import ButtonAppBar from "../components/navbar/Navbar";
import React,{ useState } from 'react';
import './style.scss';

import cardimage from '../assets/images/booking.png';
import drawkit from '../assets/images/drawkit.png';
import drawkittransport from '../assets/images/transportscene.png';
import locationicon from '../assets/images/location-icon.png';
import drawkittravel from '../assets/images/drawkittravel.png';
import calendericon from '../assets/images/calender-icon.png';
import couponicon from '../assets/images/coupon-icon.png';
import { useNavigate } from "react-router-dom";
import Popup from "../components/popup/popup";
import FileUploadPopup from "../components/fileupload/fileupload"
import Modal from '@mui/material/Modal';
import Footer from "../components/footer/Footer";


const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isComponentVisible, setComponentVisible] = useState(false);

  const toggleComponentVisibility = () => {
    setComponentVisible(!isComponentVisible);
  };
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
      <ButtonAppBar />
        <div className="main-wrapper">
          <div className="heading-wrapper">
            <h1>Travel <span>Hassle Free</span> to the top destinations</h1>
            <p>Entrust us with your itinerary, and prepare for an epic journey meticulously crafted just for you.</p>
            <div onClick={handleOpen} className="cta-Button">Get Started </div>
            <Modal open={open} className="modal"
        onClose={handleClose} ><FileUploadPopup /></Modal>
          </div>
          <div className="hero-image">
            <img src={drawkittravel} alt="Banner image" />
          </div>
        </div>
        <div className="service-section">
          <div className="heading-wrapper">
            <span>Services</span>
            <h2>Our top value categories for you</h2>
          </div>
          <div className="card-wrapper">
            <div className="valuecard">
              <img src={cardimage} alt="" />
              <h3>Enhanced Planning</h3>
              <span>Our system empowers you to plan your trip with precision and efficiency</span>
            </div>
            <div className="valuecard">
              <img src={cardimage} alt="" />
              <h3>Smart Shopping</h3>
              <span>Smart Travel Shopping: Your Personalized Essentials Guide</span>
            </div>
            <div className="valuecard">
              <img src={cardimage} alt="" />
              <h3>Enriched user experience</h3>
              <span>Effortless trip planning, unbeatable user experience.</span>
            </div>
          </div>
        </div>
        <div className="travel-point">
          <div className="image-wrapper">
            <img src={drawkit} alt="" />
          </div>
          <div className="text-wrapper">
            <span>Travel Point</span>
            <h4>We will help you get premium travel gear</h4>
            <p>We re here to help you acquire affordable premium travel gear. Whether its for purchase or rental, we have got you covered</p>
          </div>
        </div>
        <div className="key-features">
          <h5>Key Features</h5>
          <div className="wrapper">
            <div className="feature-wrapper">
              <div className="feature-card">
                <img src={locationicon} alt="" />
                <div className="text">
                  <span>We offer best recommendations</span>
                  <p>Shop travel gears through expert recommendations </p>
                </div>
              </div>
              <div className="feature-card">
                <img src={calendericon} alt="" />
                <div className="text">
                  <span>Schedule your trip</span>
                  <p>It has roots in a piece of classical</p>
                </div>
              </div>
              {/* <div className="feature-card">
                <img src={couponicon} alt="" />
                <div className="text">
                  <span>We offer best recommendations</span>
                  <p>Shop travel gears through expert recommendations </p>
                </div>
              </div> */}
            </div>
            <div className="image-wrapper">
              <img src={drawkittransport} alt="" />
            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
