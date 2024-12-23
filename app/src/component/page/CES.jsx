import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const CES = () => {

  return (
    <>
      <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Customer Empowerment Satisfaction</h1>
            <h3>Realtime Data to Customer</h3>
            <div className="section">
                <h4>PLN Mobile - Enlit Asia 2023 </h4>
                <p>PLN Mobile has transformed PLN's customer service by providing a one-stop solution for electricity service needs. The app enables real-time data monitoring, seamless transactions, and efficient complaint handling, significantly improving customer satisfaction and engagement. The digital transformation has led to increased downloads and higher customer ratings.</p>
            </div>
            <div className="section">
                <h4>Charge.In: Total Digital Solutions for Indonesia's Expanding Electric Vehicle Infrastructure </h4>
                <p>Charge.In is a digital payment system developed by PLN to streamline energy transactions for electric vehicle (EV) users. The system provides real-time data to customers, enabling them to monitor energy consumption, manage charging times, and make seamless payments. By integrating various charging stations and home charging solutions into a single platform, Charge.In enhances customer experience and satisfaction, supporting the growth of Indonesia's EV ecosystem.</p>
            </div>
            <div className="section">
                <h4>Zero Down Time (ZDT) System for Super Premium Tourism Destination of Labuan Bajo </h4>
                <p>The ZDT system implemented in Labuan Bajo ensures no outages and no dip interruptions, providing reliable and high-quality electricity services. This initiative has significantly improved customer satisfaction, with the customer satisfaction index increasing from 93% to 100%. By delivering real-time data and reliable services, PLN enhances customer empowerment and supports the region's economic growth.</p>
            </div>
            <h3>Customer Satisfaction Feedback</h3>
            <div className="section">
                <h4>PLN Mobile Application</h4>
                <p>The development of the PLN Mobile app provides real-time data to customers, enhancing transparency and empowering customers to monitor and manage their electricity usage. This initiative has significantly improved customer satisfaction.</p>
            </div>
            <div className="section">
                <h4>Outage Management in PLN</h4>
                <p>The digitalization of PLN’s outage management system has significantly improved customer satisfaction. Customers now receive real-time updates about outages, their causes, and recovery progress through the PLN Mobile app. This transparency and timely communication have enhanced the overall customer experience, as reflected in the rising Customer Satisfaction Index.</p>
            </div>
            </div>
        </div>
    </>
  );
};

export default CES;