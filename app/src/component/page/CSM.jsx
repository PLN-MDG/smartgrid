import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const CSM = () => {

  return (
    <>
      <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Cyber Security Measures</h1>
            <h3>IT Security</h3>
            <h3>OT Security</h3>
          </div>
        </div>
    </>
  );
};

export default CSM;