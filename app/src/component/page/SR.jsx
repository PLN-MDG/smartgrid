import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const SR = () => {

  return (
    <>
        <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Supply Reliability</h1>
            <h3>SAIDI</h3>
            {/* <div className='info-container'>
              <div className='info-item-container'>
                <h3>1,220,630</h3>
                <h6>Installed Unit</h6>
              </div>
              <div className='info-item-container'>
                <h3>8</h3>
                <h6>Region</h6>
              </div>
            </div>
            <p>As of January 31, 2024, the total number of installed customers stands at above a million, spanning across eight Unit Induk Distribusi (UID) regions: UID Bali, UID Jaya, UID Jabar, UID Banten, UID Jateng, UID Jatim, UID Sumut, and UID SSTB. To understand the adoption of smart meter technology among these customers, it is essential to determine the percentage of customers who have smart meters installed. This metric provides insight into the progress of smart grid initiatives and the modernization of the electricity distribution network.</p> */}
            <h3>SAIFI</h3>
            {/* <div className='info-container'>
              <div className='info-item-container'>
                <img src='maximo.png'/>
                <h6>Maximo</h6>
              </div>
            </div>
            <p>For effective management, we leverage a range of data analytics applications. These include advanced tools for network planning, maintenance, asset renewal, and innovative technologies such as Digital Twin and Artificial Intelligence applications. Specifically, for Enterprise Asset Management (EAM) in distribution, we utilize MAXIMO. MAXIMO serves as our comprehensive platform for asset registration and maintenance/work management, enabling us to optimize asset performance, streamline maintenance processes, and enhance overall operational efficiency. By integrating these advanced analytics and management tools, we ensure a robust and reliable electricity distribution network.</p> */}
          </div>
        </div>
    </>
  );
};

export default SR;