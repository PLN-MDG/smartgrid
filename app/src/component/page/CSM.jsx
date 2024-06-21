import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const CSM = () => {

  return (
    <>
      <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Cyber Security Measures</h1>
            <h3>IT & OT Security</h3>
            <p>
                PT PLN Persero, as the provider of electrical services in Indonesia, is committed to ensuring that our information technology (IT) and operational technology (OT) infrastructure maintains the highest level of security. PLN understands that in this digital era, threats to cybersecurity are becoming increasingly complex and sophisticated. Therefore, we continuously enhance our security measures to protect the electrical grid, which is the backbone of society and the economy. PLN proactively improves the cybersecurity resilience of both IT and OT systems.
            </p>
            <br/>
            <p>
                One of the strategic steps we have taken is implementing comprehensive cybersecurity policies and procedures, as well as using the latest technology to secure IT and OT systems. PLN has adopted multi-layered security solutions that include 24/7 monitoring capabilities for real-time threat detection, rapid incident response, and risk mitigation, along with technologies to ensure cybersecurity resilience. Additionally, we invest in ongoing training for our employees, partners, and customers to remain prepared for the latest cyber threats.
            </p>
            <br/>
            <p>
                We recognize the importance of transparency and accountability in maintaining IT and OT security. Therefore, we routinely conduct internal and external security audits and collaborate with leading cybersecurity experts to ensure our security protocols are always up-to-date and effective. PLN also collaborates with relevant parties both horizontally and vertically and actively participates in industry forums and collaborations to share knowledge and best practices in cybersecurity.
            </p>
            <br/>
            <p>
                PLN, assessed by the National Cyber and Crypto Agency based on the CSM framework in compliance with national regulations, has achieved a maturity level of 4 (Managed Implementation) since 2022. PLN has also been certified for the international Information Security Management System (ISMS) ISO/IEC 27001:2013 since 2022, with regular updates and reviews conducted annually for both IT and OT environments. PLN is committed to expanding the implementation of the Information Security Management System comprehensively across various fields, including generation, transmission, distribution, digital systems, and customer service.
            </p>
            <br/>
            <p>
                In 2023, PLN also established an incident response team across the entire PLN Group, integrated with the national cyber incident response team to provide sectoral and national resilience against cybercrime threats, certified by the National Cyber and Crypto Agency.
                PLN adopts global best practice standards in cybersecurity to ensure proper implementation and periodic maturity assessment. 
            </p>
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