import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';


const Footer = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };
   
    return (
      <footer>
        <div>
          <FaLinkedin onClick={() => handleIconClick('')} className='my-icon-class' />
          <FaGithub onClick={() => handleIconClick('')} className='my-icon-class'/>
          <FaStackOverflow onClick={() => handleIconClick('')} className='my-icon-class'/>
        </div>
      </footer>
    );
   };

export default Footer;