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
            <div className="section">
                <h4>The Implementation of the Automatic Dispatching System as the SGS for Distribution Grid Improvement in Sumba Island </h4>
                <p>The integration of Distributed Energy Resources (DER) is using an Automatic Dispatching System (ADS) in Sumba Island. The ADS helps maintain grid stability by managing the fluctuating nature of renewable energy sources like solar and wind, ensuring a reliable power supply. This approach allows PLN to effectively incorporate DER into the grid, supporting the transition to more sustainable energy solutions.</p>
            </div>
            <div className="section">
                <h4>Cirata Green Ecosystem </h4>
                <p>The Cirata Green Ecosystem integrates hydro and solar power plants with energy forestry and biomass machine installations. This comprehensive approach enhances PLN's capability to manage DER integration effectively, supporting renewable energy penetration and grid stability. The project demonstrates PLN's commitment to utilizing clean energy sources and advancing green energy initiatives.</p>
            </div>
            <div className="section">
                <h4>Adaptive Protection of Distribution Systems with DERs</h4>
                <p>The integration of Distributed Energy Resources (DER) into PLN's distribution network, focusing on adaptive protection schemes to manage the increased complexity and maintain grid stability.</p>
            </div>
            <div className="section">
                <h4>Semau Solar Hybrid Interactive Microgrid </h4>
                <p>The integration of Distributed Energy Resources (DER) in PLN’s Semau Solar Hybrid Interactive Microgrid. The system combines solar power with battery storage and diesel generators, ensuring seamless energy transitions and stable power supply. This initiative supports PLN's efforts in managing DER integration effectively and promoting renewable energy utilization.</p>
            </div>
            <div className="section">
                <h4>Government Regulation on Rooftop PLTS</h4>
                <p>The government, through the Ministry of Energy and Mineral Resources, has issued Minister of Energy and Mineral Resources Regulation No. 2 of 2024. This regulation sets the framework for integrating rooftop photovoltaic solar power plants (PLTS) with the electricity network operated by IUPTL holders for public purposes. This regulation aims to promote the use of renewable energy sources by allowing households and businesses to install rooftop solar panels and connect them to the public electricity grid.</p>
            </div>
            <div className="section">
                <h4>Implementing Regulations</h4>
                <p>Despite the issuance of the main regulation, the detailed implementing regulations necessary to operationalize the connection of rooftop PLTS systems to the electricity network are still under discussion. These implementing regulations will provide specific guidelines and procedures for the installation, connection, and operation of rooftop solar systems, ensuring their effective integration into the existing electricity grid.</p>
            </div>
            <div className="section">
                <h4>Hosting Capacity/DER Quota Availability</h4>
                <p>Hosting capacity or Distributed Energy Resource (DER) quotas, which determine how much rooftop solar power can be accommodated in different regions, are available for each UID/W and UP3. However, a more detailed hosting capacity map that provides quotas at the level of individual substations, feeders, or distribution transformers is not yet available. This detailed map is essential for planning and managing the integration of rooftop solar power more precisely.</p>
            </div>
            <div className="section">
                <h4>DERMS and SCADA Integration</h4>
                <p>The Distributed Energy Resource Management System (DERMS) feature, which is crucial for managing and optimizing the integration of DERs like rooftop PLTS into the grid, is not yet available and has not been integrated with the existing Supervisory Control and Data Acquisition (SCADA) system. DERMS implementation is planned for the 2027-2028 period. Once implemented, DERMS will enhance the capability of the grid to manage distributed energy resources efficiently, improving grid stability and performance.</p>
            </div>
            <div className="section">
                <h4>Protection Assessment Method for Flexibility of Hybrid Power System </h4>
                <p>The integration of Distributed Energy Resources (DER) in the Sumbawa subsystem. It examines the use of adaptive protection systems to manage the increased complexity and maintain grid stability. The implementation of the Protection Security Assessment (PSA) method allows for continuous evaluation and adjustment of protection settings, ensuring reliable integration of DER into the grid.</p>
            </div>
            <h3>Grid Scale Energy Storage</h3>
            <p>There is no Grid scale ESS yet installed on the distribution system connected to the main grid. ESS, especially BESS, has just been installed in isolated microgrid distribution systems such as the isolated microgrid system for Nusa Penida Island (1800 kWh), Selayar Island (870 kWh), Semau (2900 kWh), Sangihe (870 kWh), Medang (576 kWh).</p>
          </div>
        </div>
    </>
  );
};

export default DERI;