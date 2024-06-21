import React, { useState, useEffect } from 'react';
import "../../style/home.css"

const Home = () => {
  const [currentNav, setCurrentNav] = useState(1);

  const handleChangePage = () => {
    window.scrollTo(0, 0);
    if (currentNav === 1) {
      navigate('/automated-monitoring-control');
    } else if (currentNav === 2) {
      navigate('/data-analytics');
    } else if (currentNav === 3) {
      navigate('/supply-reliability');
    } else if (currentNav === 4) {
      navigate('/distributed-energy-resources-integration');
    } else if (currentNav === 5) {
      navigate('/green-energy');
    } else if (currentNav === 6) {
      navigate('/cyber-security-measures');
    } else if (currentNav === 7) {
      navigate('/customer-empowerment-and-satisfaction');
    }
  }

  return (
    <>
        <div>
            <div className="cover-container">
                <img  className='cover' src="home.gif"/>
                <div className='title-container'>
                    <h1 className='title-h1'>PLN's SMART GRID</h1>
                    <p className='title-p'>Discover how our Smart Grid solutions are transforming energy distribution and making a positive impact on communities and businesses alike. Welcome to a brighter, smarter, and more connected world with PLN.</p>
                </div>
            </div>
            <div className='navigation-container'>
                <h3>Explore how we implement SMART GRID in our management</h3>
                <div className='navigation-content'>
                    <div className='navigation'>
                        <button onClick={() => setCurrentNav(1)} disabled={currentNav === 1}>Automated Monitoring and Control</button>
                        <button onClick={() => setCurrentNav(2)} disabled={currentNav === 2}>Data Analytics</button>
                        <button onClick={() => setCurrentNav(3)} disabled={currentNav === 3}>Supply Reliability</button>
                        <button onClick={() => setCurrentNav(4)} disabled={currentNav === 4}>Distributed Energy Resources Integration</button>
                        <button onClick={() => setCurrentNav(5)} disabled={currentNav === 5}>Green Energy</button>
                        <button onClick={() => setCurrentNav(6)} disabled={currentNav === 6}>Cyber-Security Measures</button>
                        <button onClick={() => setCurrentNav(7)} disabled={currentNav === 7}>Customer Empowerment and Satisfaction</button>
                    </div>
                    <div className='item-display'>
                        {currentNav === 1 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">SCADA</h5>
                                <p className="card-text">See how PLN implements centralized system that monitors and controls electrical infrastructure across the country.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">DMS/ADMS</h5>
                                <p className="card-text">DMS/ADMS integrates various functionalities to monitor, analyze, and control the distribution of electricity across PLN's network. It provides real-time data on network performance, including voltage levels, current flows, and equipment status.</p>
                                </div>
                            </div>
                            </div>}
                        {currentNav === 2 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Smart Meter Coverage</h5>
                                <p className="card-text">Smart meters are advanced devices that replace traditional electromechanical meters, offering enhanced functionality and capabilities for both consumers and utility providers.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Data Analytics Application</h5>
                                <p className="card-text">See which application PLN is using to manage data and get insights from it</p>
                                </div>
                            </div>
                            </div>}
                        {currentNav === 3 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">SAIDI</h5>
                                <p className="card-text">See how measure the average duration of interruptions experienced by customers over a specific period of time within its distribution network.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">SAIFI</h5>
                                <p className="card-text">See how measure the average number of interruptions experienced by customers over a specific period within PLN's distribution network.</p>
                                </div>
                            </div>
                            </div>}
                        {currentNav === 4 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Management of DER Integration</h5>
                                <p className="card-text">Strategies and technologies employed to integrate and efficiently manage decentralized or distributed energy resources within its electricity grid.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Grid Scale Energy Storage</h5>
                                <p className="card-text">Stabilizing the grid, managing peak demand periods, integrating renewable energy sources, and enhancing overall reliability and efficiency of the electricity supply network.</p>
                                </div>
                            </div>
                            </div>}
                        {currentNav === 5 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Renewable Energy Penetration</h5>
                                <p className="card-text">Share or percentage of total electricity generation derived from renewable sources within a Indonesia region energy mix.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">EV Facilitation</h5>
                                <p className="card-text">Support the adoption and integration of electric vehicles (EVs) within the country. This includes developing infrastructure, providing incentives, and ensuring reliable electricity supply for EV charging needs.</p>
                                </div>
                            </div>
                            </div>}
                        {currentNav === 6 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">IT Cyber Security</h5>
                                <p className="card-text">See how we protect our information technology systems and data from cyber threats, unauthorized access, and other security risks.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">OT Cyber Security</h5>
                                <p className="card-text">See how we monitor and control industrial processes, including electricity generation, transmission, and distribution. Ensuring the security of these systems is critical to maintaining the reliability, safety, and efficiency of Indonesia’s electrical grid.</p>
                                </div>
                            </div>
                            </div>}
                        {currentNav === 7 && 
                            <div className='item-container'>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Realtime Data to Customer</h5>
                                <p className="card-text">See how we provide customers with real-time information about their electricity usage, billing, and service status. This transparency aims to enhance customer engagement, promote energy efficiency, and improve overall customer satisfaction.</p>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-body">
                                <h5 className="card-title">Customer Satisfaction Feedback</h5>
                                <p className="card-text">See how we collect, analyze, and respond to feedback from our customers.</p>
                                </div>
                            </div>
                            </div>}
                            <button className='button-2' onClick={handleChangePage}>See More</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};



export default Home;