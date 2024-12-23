import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const DA = () => {

  return (
    <>
        <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Data Analytics</h1>
            <h3>Smart Meter Coverage</h3>
            <div className='info-container'>
              <div className='info-item-container'>
                <h3>1,220,630</h3>
                <h6>Installed Unit</h6>
              </div>
              <div className='info-item-container'>
                <h3>8</h3>
                <h6>Region</h6>
              </div>
            </div>
            <p>As of January 31, 2024, the total number of installed customers stands at above a million, spanning across eight Unit Induk Distribusi (UID) regions: UID Bali, UID Jaya, UID Jabar, UID Banten, UID Jateng, UID Jatim, UID Sumut, and UID SSTB. Smart meters provide detailed data that enhances the accuracy and reliability of the Distribution System State Estimation (DSSE), enabling better real-time monitoring and management of the distribution network. This integration supports PLN's efforts to optimize grid performance and customer service through enhanced data visibility and predictive maintenance capabilities.</p>
            <div className="section">
                <h4>The Implementation of Smart Asset Management System to Monitor the Health Index of Power Distribution Assets: Case Study of PLN’s EAM in Indonesia </h4>
                <p>PLN’s implementation of an Enterprise Asset Management (EAM) system utilizes smart meters and integrates various local applications into a centralized platform. This system improves asset management through predictive maintenance, optimizing the health and performance of distribution assets, thereby enhancing operational efficiency.</p>
            </div>
            <h3>Data Analytics Application</h3>
            <div className="section">
                <h4>Enhancing Reliability with Predictive Maintenance </h4>
                <p>The use of data analytics for predictive maintenance is highlighted, integrating Geographic Information System (GIS) with Maximo for asset management. This approach helps PLN reduce SAIDI and SAIFI by predicting and preventing equipment failures.</p>
            </div>
            <div className="section">
                <h4>PLN Mobile: A One-Stop Solution for Customer's Electricity Service Needs </h4>
                <p>PLN Mobile leverages data analytics to enhance customer service by providing real-time data monitoring and a comprehensive service platform. The app facilitates seamless transactions, bill payments, and complaint reporting while offering additional services such as ICONNET (internet retail), EV Digital Service, and Marketplace. This digital transformation has drastically improved customer satisfaction and engagement, making PLN Mobile a top-rated app in its segment.</p>
            </div>
            </div>
        </div>
    </>
  );
};

export default DA;