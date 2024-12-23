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
            <div className='info-container'>
              <div className='info-item-container'>
                <h3>1.78 hours</h3>
                <h6>SAIDI per customer</h6>
              </div>
              <div className='info-item-container'>
                <h3>90,156,570</h3>
                <h6>Customer</h6>
              </div>
            </div>
            <p>Unplanned outages in distribution facilities contributed significantly to the SAIDI figures. In the substation facilities, the MV Cell outages alone resulted in a total downtime of 49,402.12 hours, affecting 100,618 customers. Outages in the outgoing cable to the first pole and the outgoing feeder relay added 47,463.92 hours and 42,950.65 hours of downtime, respectively. Overall, the 20kV substation facilities experienced 139,816.69 hours of downtime affecting 220,043 customers.</p>
            <br/>
            <p>In the medium voltage transmission lines (SUTM), conductors were the primary contributors to downtime, accounting for 63,198,137.02 hours of interruptions affecting 54,789,150 customers. Additionally, pole-related issues and DS/LBS interruptions caused 1,440,526.99 hours and 879,357.87 hours of downtime, respectively. In total, the SUTM facilities recorded 77,715,913.54 hours of downtime affecting 68,219,015 customers. Planned outages also impacted the SAIDI metrics. Substation-related planned outages, including construction, maintenance, and operation activities, resulted in a total downtime of 96,927.50 hours, affecting 66,443 customers. Distribution line planned outages added 22,279,358.19 hours of downtime affecting 13,229,198 customers. Overall, planned outages contributed 25,298,424.68 hours of downtime affecting 15,392,538 customers.</p>
            <br/>
            <p>Natural disasters also played a role in downtime. Distribution lines affected by natural disasters experienced 9,990,306.18 hours of downtime affecting 4,219,604 customers. Substations faced 361,373.03 hours of downtime affecting 98,372 customers. In total, natural disasters caused 10,368,712.68 hours of downtime affecting 4,330,083 customers.</p>
            <div className="section">
                <h4>Distribution Automation System Field Test in Jakarta MV Network</h4>
                <p>The focus is on reducing the System Average Interruption Duration Index (SAIDI) through automation and real-time monitoring. By implementing feeder automation and Fault Location Isolation and System Restoration (FLISR) systems, PLN aims to minimize power outages, improve recovery times, and enhance customer satisfaction by providing more reliable electricity services. These efforts are crucial in achieving higher service quality and operational efficiency.</p>
            </div>
            <div className="section">
                <h4>Semi-Distributed Automatic Scheme for Self-Healing Implementation</h4>
                <p>By improving fault detection and restoration times, this scheme helps PLN achieve lower SAIDI, enhancing supply reliability. The system's success in reducing restoration time from 38 minutes to 8 seconds is a significant achievement.</p>
            </div>
            <div className="section">
                <h4>Relocation of Grati Gas Turbine Power Plant</h4>
                <p>The relocation of the Grati Gas Turbine Power Plant to Bali, completed in an accelerated timeline, was crucial for ensuring uninterrupted power supply during the G20 Summit. This project not only strengthened Bali’s grid but also demonstrated PLN's ability to meet tight deadlines and maintain high operational efficiency. The successful execution of this project contributed to reducing SAIDI by ensuring a stable and reliable power supply during significant international events.</p>
            </div>
            <h3>SAIFI</h3>
            <div className='info-container'>
              <div className='info-item-container'>
                <h3>1.35</h3>
                <h6>SAIFI interruptions per customer</h6>
              </div>
              <div className='info-item-container'>
                <h3>90,156,570</h3>
                <h6>Customer</h6>
              </div>
            </div>
            <p>Unplanned outages in distribution facilities were a significant factor in the SAIFI figures. In the substation facilities, the MV Cell experienced 33 interruptions. Additionally, the outgoing cable to the first pole and the outgoing feeder relay encountered 10 and 6 interruptions, respectively. Overall, the 20kV substation facilities faced a total of 49 interruptions. Medium voltage transmission lines (SUTM) saw a high number of interruptions. Conductors were the primary contributors, with 16,862 interruptions. Poles and DS/LBS interruptions added 196 and 430 interruptions, respectively. In total, the SUTM facilities recorded 24,764 interruptions.</p>
            <br/>
            <p>Planned outages also impacted the SAIFI metrics. Substation-related planned outages, including construction, maintenance, and operation activities, resulted in 56 interruptions. Distribution line planned outages contributed 8,912 interruptions. Overall, planned outages caused a total of 23,632 interruptions. Natural disasters contributed to the frequency of interruptions. Distribution lines affected by natural disasters experienced 890 interruptions, while substations faced 382 interruptions. In total, natural disasters caused 5,728 interruptions.</p>
            <br/>
            <p>Overall, PT PLN (Persero) reported a total of 1,558,014 interruptions for distribution facilities and 1,563,352 interruptions across all categories. These figures reflect the company's ongoing efforts to manage and mitigate interruptions, ensuring a reliable power supply for its customers.</p>
            <div className="section">
                <h4>Implementation of Super Intelligent Microgrid System at Semau Island</h4>
                <p>The impact of the microgrid system on reducing the System Average Interruption Duration Index (SAIDI) and System Average Interruption Frequency Index (SAIFI) by enhancing the reliability of electricity supply through the integration of renewable energy sources and advanced control systems. This approach significantly improves supply reliability and supports PLN's goal of achieving higher service quality.</p>
            </div>
            </div>
        </div>
    </>
  );
};

export default SR;