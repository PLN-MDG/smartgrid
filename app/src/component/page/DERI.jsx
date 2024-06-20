import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const DERI = () => {

  return (
    <>
      <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Distributed Energy Resources Integration</h1>
            <h3>Management DER Integration</h3>
            <p>1. The Government through the Ministry of Energy and Mineral Resources (ESDM) has issued Ministerial Regulation No. 2 of 2024 regarding the regulation of Rooftop Solar Power Plants (PLTS Atap) connected to the electricity network holders of IUPTL for public purposes.</p>
            <p>2. The implementing regulation for connecting Rooftop Solar Power Plants (PLTS Atap) is still under discussion.</p>
            <p>3. Hosting capacity/quota for Distributed Energy Resources (DER) per UID/W and UP3 is already available, but Hosting Capacity map/quota map (per Substation or per feeder or per distribution transformer) is not yet available.</p>
            <p>4. The DERMS (Distributed Energy Resources Management System) feature is not yet available and not integrated with existing SCADA. The DERMS plan will be implemented in the period from 2027 to 2028.</p>
            <h3>Grid Scale Energy Storage</h3>
            <p>Grid-scale ESS has not yet been installed in the distribution system connected to the main grid. Specifically, BESS has only been installed in isolated microgrid systems such as the Nusa Penida Island microgrid system (1800 kWh), Selayar Island (870 kWh), Semau (2900 kWh), Sangihe (870 kWh), and Medang (576 kWh).</p>
          </div>
        </div>
    </>
  );
};

export default DERI;