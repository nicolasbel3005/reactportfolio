import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub} from 'react-icons/fa';


const Footer = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };
   
    return (
      <footer>
        <div>
          <FaGithub onClick={() => handleIconClick('')} className='my-icon-class'/>
        </div>
      </footer>
    );
   };

export default Footer;