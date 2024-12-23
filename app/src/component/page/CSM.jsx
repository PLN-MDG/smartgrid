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
            <div className="section">
                <h4>Distribution Automation System Field Test in Jakarta MV Network</h4>
                <p>The security measures required for automating distribution networks is including robust IT cyber security protocols. These measures are essential to protect against cyber threats and unauthorized access, ensuring the continuous and secure operation of PLN's distribution network.</p>
            </div>
            <h3>OT Security</h3>
            <div className="section">
                <h4>Protection Assessment Method for Flexibility of Hybrid Power System </h4>
                <p>The implementation of OT cybersecurity measures in hybrid power systems to protect critical infrastructure from cyber threats. Ensuring the security of operational technology (OT) systems is vital for maintaining the reliability and security of PLN’s power distribution network.</p>
            </div>
            
            <h2>Certified By:</h2>
            <div className='info-container'>
              <div className='info-item-container'>
                <img src='iso.png'/>
                <h6>ISO 27001</h6>
              </div>
              <div className='info-item-container'>
                <img src='nist.webp'/>
                <h6>NIST</h6>
              </div>
              <div className='info-item-container'>
                <img src='nerc.jpeg'/>
                <h6>NERC</h6>
              </div>
              <div className='info-item-container'>
                <img src='iec.png'/>
                <h6>IEC 62443</h6>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default CSM;