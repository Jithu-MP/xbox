import React from 'react';

import './style.scss';

const Footer = () => {
  return (
    <footer className='footerStyle'>
      &copy; {new Date().getFullYear()} Journey Junction
    </footer>
  );
};

export default Footer;
