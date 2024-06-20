import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const GE = () => {

  return (
    <>
      <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Green Energy</h1>
            <h3>Renewable Energy Penetration</h3>
            <h3>EV Facilitation</h3>
            <ol>
                <li>Incentives for Connection Costs and Power Changes for owners of four-wheeled KBLBB with home charging.</li>
                <li>Incentives for Connection Costs and Power Changes for SPKLU and SPBKLU entities, fostering infrastructure providers for charging facilities.</li>
                <li>30% Electricity Tariff Discount for home charger usage between 22:00-05:00, reducing peak load on the electricity grid and encouraging EV users to charge during off-peak hours.</li>
                <li>Use of electric vehicles in technical service fleets.</li>
                <li>Partnership for SPKLU provision, providing opportunities and facilitation for entities (non-owners of IUPTL) to invest in providing SPKLU infrastructure.</li>
                <li>Development of SPKLU ranging from Medium Charging, Fast Charging, to Ultra Fast Charging at rest areas, offices, and public facilities across Indonesia.</li>
                <li>Provision of EV Digital Service platform for electric vehicle charging (SPKLU and SPLU) and battery exchange (SPBKLU), EV marketplace, travel planning, home charger management, EV Community, and more.</li>
                <li>Distribution of SPLU and SPBKLU facilities across Indonesia.</li>
            </ol>
          </div>
        </div>
    </>
  );
};

export default GE;