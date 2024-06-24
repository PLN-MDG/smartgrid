import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/header.css'

const Header = () => {

  return (
    <>
        <div className="header-container" id='navbar'>
            <img src='logo.png'/>
        </div>
    </>
  );
};

export default Header;